const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController = require("../controllers/bookController")
const AuthorController = require("../controllers/autherController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
//books api
router.post("/createBook", BookController.createBook  )
router.get("/allBooks", BookController.allBooks)
router.post("/getAuthorIdBooks",BookController.booksAuthorId)
router.get("/bookupdate",BookController.bookupdate)
router.get("/rangebook",BookController.rangebook)
// auther api's
router.post("/createauthor",AuthorController.createAuthor)
router.get("/allauthor",AuthorController.allauthor)
router.get("/getAuthorId",AuthorController.getId) //send auther_id and takes book name as input 

module.exports = router;