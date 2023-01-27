const { Schema } = require('mongoose');

const nftSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    token_name: {
        type: String,
        required: true,
    },
    collection_name: {
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
        required: true
    },


})

module.exports= nftSchema;