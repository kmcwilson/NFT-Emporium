const db = require('../config/connection');
const { User, Order, NFT } = require('../models');

db.once('open', async () => {
    await NFT.deleteMany();

   await NFT.insertMany([
        {
            nft_token: 'Hangout Hawk',
            nft_collection: 'VeeFriends',
            image: 'Hangouthawk.png',
            owner: '0x9e90ad993827A9f8a99C211b4A5D00e4f5E6DD6d',
            price: 15
        },
        {
            nft_token: 'Everydays-The First 5000 Days',
            nft_collection: 'Beeple',
            image: 'Beeple.png',
            owner: '0x8bB37fb0F0462bB3FC8995cf17721f8e4a399629',
            price: 42,329.425
        },
        {
            nft_token: '5822',
            nft_collection: 'CryptoPunks',
            image: 'Alienpunk.png',
            owner: '0x4d8f496a4e29f5643d9161b9749d99a9623abf78',
            price: 8,000
        },
        {
            nft_token: 'Gift Goat',
            nft_collection: 'VeeFriends',
            image: 'Giftgoat.png',
            owner: '0x5ea9681C3Ab9B5739810F8b91aE65EC47de62119',
            price: 20
        },
        {
            nft_token: '2924',
            nft_collection: 'CryptoPunks',
            image: 'Apepunk.png',
            owner: '0x9045deb6c61b6bc687a070baba941fcf34e5759d',
            price: 3,300
        },
        {
            nft_token: '6388',
            nft_collection: 'Bored Ape Yacht Club',
            image: 'Goldglassesbayc.png',
            owner: '0x7eb413211a9DE1cd2FE8b8Bb6055636c43F7d206',
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
            price: 1,540.069
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
            owner: '0x7A9fe22691c811ea339D9B73150e6911a5343DcA',
            price: 350
        },

    ]);
    process.exit();
})