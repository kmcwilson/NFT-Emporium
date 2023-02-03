const { Schema, model } = require('mongoose');

const nftSchema = new Schema(
    {
        nft_token: {
            type: String,
            required: true,
            trim: true,
        },
        nft_collection: {
            type: String,
        },
        image: {
            type: String,
        },
        owner: {
            type: String,
        },
        price: {
            type: Number,
            min: 0,
            default: 0,
            required: true,
        }


    });

const NFT = model('NFT', nftSchema);
module.exports = NFT;