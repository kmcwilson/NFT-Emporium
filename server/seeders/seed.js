const db = require('../config/connection');
const { User, Order, NFT } = require('../models');

db.once('open', async () => {
    await NFT.deleteMany();

   await NFT.insertMany([
        {
            nft_token: 'monkey',
            nft_collection: 'ape',
            image: 'Hello',
            link: 'I ama  link',
            owner: 'Katie',
            price: 299.99
        },
        {
            nft_token: 'monkey',
            nft_collection: 'ape',
            image: 'Hello',
            link: 'I ama  link',
            owner: 'Katie',
            price: 299.99
        },
        {
            nft_token: 'monkey',
            nft_collection: 'ape',
            image: 'Hello',
            link: 'I ama  link',
            owner: 'Katie',
            price: 299.99
        },
        {
            nft_token: 'monkey',
            nft_collection: 'ape',
            image: 'Hello',
            link: 'I ama  link',
            owner: 'Katie',
            price: 299.99
        },
        {
            nft_token: 'monkey',
            nft_collection: 'ape',
            image: 'Hello',
            link: 'I ama  link',
            owner: 'Katie',
            price: 299.99
        },
        {
            nft_token: 'monkey',
            nft_collection: 'ape',
            image: 'Hello',
            link: 'I ama  link',
            owner: 'Katie',
            price: 299.99
        },
        {
            nft_token: 'monkey',
            nft_collection: 'ape',
            image: 'Hello',
            link: 'I ama  link',
            owner: 'Katie',
            price: 299.99
        },
        {
            nft_token: 'monkey',
            nft_collection: 'ape',
            image: 'Hello',
            link: 'I ama  link',
            owner: 'Katie',
            price: 299.99
        },
        {
            nft_token: 'monkey',
            nft_collection: 'ape',
            image: 'Hello',
            link: 'I ama  link',
            owner: 'Katie',
            price: 299.99
        },
        {
            nft_token: 'monkey',
            nft_collection: 'ape',
            image: 'Hello',
            link: 'I ama  link',
            owner: 'Katie',
            price: 299.99
        },
        {
            nft_token: 'monkey',
            nft_collection: 'ape',
            image: 'Hello',
            link: 'I ama  link',
            owner: 'Katie',
            price: 299.99
        },

    ]);
    process.exit();
})