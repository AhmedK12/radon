const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    name : String,
    address: String,
    age: Number,
    balence:{type:Number,default:100},
    gender:{type:String,enum:["male","female","other"]},
    isFreeAppUser:{type:Boolean,default:false}

}, { timestamps: true });

module.exports = mongoose.model('User', userSchema)