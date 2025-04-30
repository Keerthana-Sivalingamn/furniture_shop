// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  stock: Number,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  image_url: String,
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);
