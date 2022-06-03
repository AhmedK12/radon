const express = require('express');
const { find } = require('underscore');
const router = express.Router();


let players = [{"name": "gopal",
"dob": "1/09/1995",
"gender": "male",
"city": "delhi",
"sports": [
    "soccer"
],
},
{"name": "montu",
"dob": "1/09/1999",
"gender": "male",
"city": "delhi",
"sports": [
    "cricket"
],
},

{"name": "nurul",
"dob": "1/09/1895",
"gender": "male",
"city": "delhi",
"sports": [
    "cricket"
],
},
{"name": "danish",
"dob": "1/09/1985",
"gender": "male",
"city": "delhi",
"sports": [
    "bollyball"
],
},

]

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get('/players', function(req, res) {
    
    res.send(players)
})

router.post('/players', function(req, res) {
     let newplayer = req.body
     let playerName = newplayer.name
     let element = players.find((element)=>{
         if(element.name == playerName)
           return true;
         return false
     })
     if(element==undefined)
       players.push(newplayer)
    res.send(players)
})


router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})

module.exports = router;