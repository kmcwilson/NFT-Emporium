const db = require('../config/connection');
const { User, Order, NFT } = require('../models');

db.once('open', async () => {
    await NFT.deleteMany();

   await NFT.insertMany([
        {
            nft_token: 'Hangout Hawk',
            nft_collection: 'VeeFriends',
            image: 'Hangouthawk.png',
            owner: 'ryanparketh',
            price: 15
        },
        {
            nft_token: 'Everydays-The First 5000 Days',
            nft_collection: 'Beeple',
            image: 'Beeple.png',
            owner: 'Metakovan',
            price: 42329.425
        },
        {
            nft_token: '5822',
            nft_collection: 'CryptoPunks',
            image: 'Alienpunk.png',
            owner: '0x4d8f496a4e29f5643d9161b9749d99a9623abf78',
            price: 8000
        },
        {
            nft_token: 'Gift Goat',
            nft_collection: 'VeeFriends',
            image: 'Giftgoat.png',
            owner: 'GaryVee',
            price: 20
        },
        {
            nft_token: '2924',
            nft_collection: 'CryptoPunks',
            image: 'Apepunk.png',
            owner: '0x9045deb6c61b6bc687a070baba941fcf34e5759d',
            price: 3300
        },
        {
            nft_token: '6388',
            nft_collection: 'Bored Ape Yacht Club',
            image: 'Goldglassesbayc.png',
            owner: 'nobody_vault',
            price: 869.69
        },
        {
            nft_token: '8817',
            nft_collection: 'Bored Ape Yacht Club',
            image: 'Goldbayc.png',
            owner: '0x22dd884DF8B5DEE9B44472f0472Dc42e56AbEE89',
            price: 819
        },
        {
            nft_token: 'Mega Mutant Serum',
            nft_collection: 'Bored Ape Chemistry Club ',
            image: 'Serum.png',
            owner: '0x69c488Bcda156379B6661f08A35dB627E5D467Dd',
            price: 1540.069
        },
        {
            nft_token: '4849',
            nft_collection: 'Mutant Ape Yacht Club',
            image: 'Mayc.png',
            owner: '0x3bf4089C7D080C04233007C3577062d5c0Df9fa6',
            price: 350
        },
        {
            nft_token: '2642',
            nft_collection: 'Moonbirds',
            image: 'Moonbird.png',
            owner: 'TheSandboxGame',
            price: 350
        },

    ]);
    process.exit();
});