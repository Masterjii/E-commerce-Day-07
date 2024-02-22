

const mongoose = require('mongoose');   //object


const productSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,   
        required:true 
    },
    img:{
        type:String,
        trim:true,
        required:true
    },
    price:{
        type:Number,
        min:0,
        required:true
    },
    desc:{
        type:String,
        trim:true
    },
    reviews:[
        {
            type: mongoose.Schema.Types.ObjectId,   
            ref: 'Review'
        }
    ],
    author:{
        type: mongoose.Schema.Types.ObjectId,   
        ref: 'User'
    }
})

let Product = mongoose.model('Product', productSchema);

module.exports = Product;

// seed.js -> YE Koi module ya package nhi h
// Saamaan ? -> maanlo hume 4-5 saamaan ek sath bhejna h,toh hum insertMany() se bhej sakte h
// Yaha saamaan bhejne ko seed.js kehte h












