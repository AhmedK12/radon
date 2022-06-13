
const user = require('../model/userModel')
const mongoose = require('mongoose')

const createUser = async function(req,res){
    let data = req.body
    data["isFreeAppUser"] = req.header["isFreeAppUser"]
    let savedata = await  user.create(data)
    res.send(savedata)
}

const checkUserPrice = async (userId)=> {
    return await user.findOne({_id:userId},{_id:0,balence:1})
}

const updateBalence = async function(newPrice,userId){
    console.log(newPrice)
    let user1 = await user.findOneAndUpdate({_id:userId},{balence:newPrice},{new:true})
    console.log(user1)
    return true;
     
}

module.exports.createUser = createUser
module.exports.checkUserPrice = checkUserPrice
module.exports.updateBalence = updateBalence