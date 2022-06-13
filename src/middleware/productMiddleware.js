
const mongoose = require("mongoose")
const ObjectId = mongoose.Types.ObjectId

const user = require("../model/userModel")

const product = require("../model/productModel")

let str = "62a7146c2061c950eefc9e69"

const validateUser = async function(req,res,next){
     


    let userId = ObjectId(req.body["userId"])

    if(userId&&userId.toString().length === str.length){
        let user1 = await user.findById(req.body["userId"])
        if(user1){
            next()
        }
        else{
            res.send({msg:"userid not valid"})
        }
    }
    else{
        res.send({msg:"userId not valid"})
    }

}

const validateProduct = async function(req,res,next){
    let productId = ObjectId(req.body["productId"])
    
    if(productId&&productId.toString().length ===str.length){
        console.log(productId)
        let product1 = await product.findById(req.body["productId"])
        console.log(product1)
        if(product1){
            next()
        }
    }
    else{
        res.send({msg:"productId not valid"})
    }
}


module.exports.validateProduct = validateProduct
module.exports.validateUser = validateUser