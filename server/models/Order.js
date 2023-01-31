const { Schema } = require ('mongoose');

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'NFT'
    }
  ]
});

module.exports = orderSchema;