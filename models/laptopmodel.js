const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const laptopSchema = new Schema({
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
    specification: {
        type:String,
        required:false
    }

}, {timestamps: true}
);

module.exports = mongoose.model('Laptops',laptopSchema); 