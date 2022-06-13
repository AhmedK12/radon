
const order = require('../model/orderModel')
const mongoose = require('mongoose')
const user = require('../controller/userController')
const ObjectId = mongoose.Types.ObjectId

const createOrder = async function(req,res){
//    console.log("i am here")

    let data = req.body
    // data["isFreeAppUser"] = req.header["isfreeappuser"]
    if(data["isFreeAppUser"]===true){
       data["price"] = 0
       let savedata = await order.create(data)
       res.send({msg:savedata})
    }
    else{
        let balence = await user.checkUserPrice(data["userId"])
        console.log(balence["balence"])
        if(data["price"]>balence["balence"])
          res.send({msg:"user doesn't have enough balance"})

        else{
            if(await user.updateBalence(balence["balence"]-data["price"],data["userId"])){
            let savedata = await order.create(data)
            res.send({savedata})

            }
        }
    }
   
    
}




module.exports.createOrder = createOrder