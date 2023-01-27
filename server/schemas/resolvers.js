const { AuthenticationError } = require("apollo-server-express");
const { User, NFT, Order } = require("../models");
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },
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

          checkout: 

            },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };

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
                saveNFT: async (parent, { input }, context) => {
                    if (context.user) {
                        const updatedUser = await User.findByIdAndUpdate(
                            { _id: context.user._id },
                            { $addToSet: { savedNFTs: input } },
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
                                { $pull: { savedNFTs: { nft_id: args.nft_id } } },
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
    }
};