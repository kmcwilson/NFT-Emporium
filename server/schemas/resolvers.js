const { AuthenticationError } = require("apollo-server-express");
const { User, NFT, Order } = require("../models");
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'orders.nfts',
                });
                user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
                return user;
            }
            throw new AuthenticationError('Not logged in');
        },
        nfts: async (parent, { nft_id }) => {
            return await NFT.findOne({ _id: nft_id });
        },
        order: async (parent, { _id }, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'orders.nfts',

                });
                return user.orders.id(_id);
            }

            throw new AuthenticationError('Not logged in');
        },

        checkout: async (parent, args, context) => {
            const url = new URL(context.headers.referer).origin;
            const order = new Order({ nfts: args.nfts });
            const order_items = [];

            const { nfts } = await order.populate('nfts');

            for (let i = 0; i < nfts.length; i++) {
                const product = await stripe.nfts.create({
                    token: nfts[i].token,
                    collection: nfts[i].collection,
                    owner: nfts[i].owner,
                    images: [`${url}/images/${nfts[i].image}`],
                });

                const price = await stripe.prices.create({
                    nft: nfts.nft_id,
                    unit_amount: nfts[i].price * 100,
                    currency: 'cad',
                });

                order_items.push({
                    price: price.id,

                });
            }

            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                order_items,
                mode: 'payment',
                success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${url}/`
            });

            return { session: session.id };
        }

    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },

            login: async (parent, { email, password }) => {
                const user = await User.findOne({ email });

                if (!user) {
                    throw new AuthenticationError('No user found with this email address');
                }

                const correctPw = await user.isCorrectPassword(password);

                if (!correctPw) {
                    throw new AuthenticationError('Incorrect credentials');
                }

                const token = signToken(user);

                return { token, user };
            },
                saveNFTs: async (parent, { input }, context) => {
                    if (context.user) {
                        const updatedUser = await User.findByIdAndUpdate(
                            { _id: context.user._id },
                            { $addToSet: { savedNFT: args.input } },
                            { new: true }
                        );
                        return updatedUser;
                    }
                    throw new AuthenticationError('You need to be logged in!')
                },
                    removeNFT: async (parent, args, context) => {
                        if (context.user) {
                            const updatedUser = await User.findOneAndUpdate(
                                { _id: context.user._id },
                                { $pull: { savedNFTs: { nftId: args.nft._id } } },
                                { new: true }
                            );
                            return updatedUser;
                        }
                        throw new AuthenticationError('You need to be logged in!')

                    },
                        addOrder: async (parent, { nfts }, context) => {
                            if (context.user) {
                                const order = new Order({ nfts });
                                await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });
                                return order;

                            }
                            throw new AuthenticationError('Not logged in');
                        }
        }
    };

    module.exports= resolvers;
