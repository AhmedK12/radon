const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const allBooks = async function(req,res){
    let allBooks = await BookModel.find().select({bookName:1,authorName:1,_id:-1})
    res.send({msg: allBooks})
}

module.exports.createBook = createBook
module.exports.allBooks = allBooks