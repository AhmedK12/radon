const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel = require('../models/autherModel')

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const allBooks = async function(req,res){
    let allBooks = await BookModel.find()
    res.send({msg: allBooks})
}
const booksAuthorId = async function(req,res){
    let books = await BookModel.find({auther_id :req.body})
    res.send({msg: books})
}

const bookupdate = async function(req,res){
    console.log("book")
    let allBooks = await BookModel.findOneAndUpdate( 
        { name: req.query.name} , //condition
        { $set: {price:req.query.price} }, //update in data
        { new: true , upsert: true})

    let name =  await AuthorModel.findOne({author_id : allBooks["author_id"]},{author_name:1,_id:0})

    res.send({name,price:allBooks["price"]})
}

const rangebook = async function(req,res){
    
    let books = await BookModel.find( { price : { $gte: 0, $lte: 190} } )
    let names = []
   books.forEach( async (element)=>{
    let id = element["author_id"]
        let x = await AuthorModel.findOne({author_id :1 },{author_name:1,_id:0})
     names.push( x )
    })
    res.send(names)
}

module.exports.createBook = createBook
module.exports.allBooks = allBooks
module.exports.booksAuthorId = booksAuthorId
module.exports.bookupdate = bookupdate
module.exports.rangebook = rangebook