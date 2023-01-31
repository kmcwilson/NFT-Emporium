const mongoose=  require ('mongoose');

const { Schema,model } = mongoose

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
const Order = model ('Order', orderSchema)

module.exports = Order;