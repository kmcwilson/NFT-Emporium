const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const nftSchema = new Schema({
    nft_id: {
        type: Number,
        min: 0,
        default: 0,
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
    collection: {
        type: String,
    },
    image: {
        type: String,
    },
    link: {
        type: String,
    },
    owner: {
        type: String,
    },
    price: {
        type: Number,
        min: 0,
        default: 0,
        required: true
    },


})

const NFT = model('NFT', nftSchema)
module.exports = NFT;