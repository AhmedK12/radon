const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post("/createBook", BookController.createBook  )//Done

router.get("/bookList", BookController.bookList)//Done
router.post("/getBookInYear",BookController.getBooksInYear)//Done
router.post("/getParticularBooks",BookController.getParticularBooks)
router.post("/getRandomBooks",BookController.getRandomBooks)//Done
router.post("/getXINRBooks",BookController.getXINRBooks)//Done

module.exports = router;