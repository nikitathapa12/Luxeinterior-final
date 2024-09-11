const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  productImage: {
    type: String,
    required: true,
  },
  countInStock: {
    type: Number,
  },
  // New fields for recommending products
  isRecommended: {
    type: Boolean,
    default: false, // Set default value as false
  },
  tags: {
    type: [String], // An array of strings for tagging products (optional)
  }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
