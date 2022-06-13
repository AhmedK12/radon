
const product = require('../model/productModel')
const mongoose = require('mongoose')

const createProduct = async function(req,res){
    console.log(req.body)
    let data = req.body
    let savedata = await  product.create(data)
    res.send(savedata)
}




module.exports.createProduct = createProduct