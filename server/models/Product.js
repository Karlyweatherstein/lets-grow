const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({ 
    name: {
        type: String,
        require: true,
        trim: true
    },
    description: {
        type: String,
        require: true,
        trim: true
    },
    image_price: {
        type: String,
        require: true,
        trim: true
    },
    category: {
        type: String,
        require: true,
        trim: true
    },






 })









module.exports = Product;