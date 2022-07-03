const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({ 
    name: {
        type: String,
        required: true,
        trim: true
      },
      description: {
        type: String
      },
      image: {
        type: String
      },
      price: {
        type: Number,
        required: true,
        min: 0.99
      },
      quantity: {
        type: Number,
        min: 0,
        default: 5
      },
      category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
      }
 });

<<<<<<< HEAD
=======






>>>>>>> fd11380288e9a5a7d3b8f146626ce0bbc7ded982
 const Product = mongoose.model('Product', productSchema);

module.exports = Product