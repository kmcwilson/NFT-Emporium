const { Schema } = require('mongoose');

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
module.exports = nftSchema;