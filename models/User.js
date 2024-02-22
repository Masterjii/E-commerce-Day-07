

const mongoose = require('mongoose');   //object
const passportLocalMongoose = require('passport-local-mongoose');


// Schema -
const userSchema = new mongoose.Schema({

//    username - PL (passport-local)
//    password - PLM (passport-local-mongoose)

   email:{
    type:String,
    trim:true,
    required:true
   },
   role:{
    type:String,
    trim:true,
    default: 'buyer'
   },
   gender:{
    type:String,
    trim:true,
    required:true
   },
   wishlist:[
      {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product'
      }
  ],
})

userSchema.plugin(passportLocalMongoose);  // always apply on schema

let User = mongoose.model('User', userSchema);
module.exports = User;












