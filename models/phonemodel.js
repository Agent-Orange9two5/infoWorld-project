const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const phoneSchema = new Schema({
    name:{
        type:String,
        required: true

    },
    brand: {
        type:String,
        required: true 
    },
    description: {
        type:String,
        required: false 
    },
    price: {
        type:Number,
        required: true 
    },

    color: {
        type: String,
        required: false
    },

    technology: {
        type: String,
        required: true
    }

    
}, {timestamps: true}
);

module.exports = mongoose.model('Phones',phoneSchema); 