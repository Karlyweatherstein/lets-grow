const mongoose = require('mongoose');
const { Schema } = mongoose;

const trainerSchema = new Schema({ 
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
         type: Schema.Types.ObjectId,
         ref: 'Category',
         required: true
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    } 
});

const Trainer = mongoose.model('Trainer', trainerSchema);

module.exports = Trainer