const mongoose = require('mongoose');

const { Schema } = mongoose; 

const categorySchema = new Schema({
    name: {
        type: String,
        requied: true,
        trim: true
    }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category; 