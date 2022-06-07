const AuthorModel = require('../models/autherModel')
const BookModel= require("../models/bookModel")

const createAuthor = async function(req,res){
    let data = req.body
    let savedData = await AuthorModel.create(data)
    res.send({msg: savedData})
}

const allauthor = async function(req,res){
    let allAuthers = await AuthorModel.find() 
    res.send({msg: allAuthers})
}

const getId = async function(req,res){
    let data = await AuthorModel.findOne({author_name : req.query.author_name},{author_id:1,_id:0})
    // console.log(data)
    let books = await BookModel.find(data)
    res.send(books)
}



module.exports.createAuthor = createAuthor
module.exports.allauthor = allauthor
module.exports.getId = getId