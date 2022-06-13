const mongoose = require('mongoose');
const moment = require('moment')
const ObjectId = mongoose.Types.ObjectId

const orderSchema = new mongoose.Schema( {
    userId : {type: ObjectId,ref:"User"},
    productId : {type:ObjectId,ref:"Product"},
    price:{type:Number,default:0},
    isFreeAppUser : {type:Boolean},
    date:{type:String,default:moment().format("YYYY-MM-DD")}


}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema)