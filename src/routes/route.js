const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')
const moment = require('moment');
const lodash = require('lodash')

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

const chunk = ()=>{
    moment.locale('en'); // sets words language (optional if current locale is to be used)
    let months = moment.months()    
    console.log(lodash.chunk(months,4))
}

const tail = ()=>{
    let oddnum = [1,3,5,7,9,11,13,15,17,19]
    console.log(lodash.tail(oddnum))
}

let a = [
    [1,3,4,567,43,4567,3,2,34,345,212],
    [21,23,34,43,345,45678,234,23],
    [1,2,3,4,5,6,7,8,9,23,34,43,23432],
    [23,4,3,2,1,34,43,345],
    [1,2,3,4,21,43,34,345,5666,898]
]

const union = ()=>{
    
    
    console.log(lodash.union(a[0],a[1],a[2],a[3],a[4]))
}

const fromPairs = ()=>{
    
    let pairs = [['Kamaran Ahmed','Coder'],['King Khan','SRK'],['Mr.Cricketer','Michael Hussey'],['Mr.Perfectionist','Aamir Khan'],['Mr.Ipl','Suresh Raina'],['Run Machine','Virat Kohli']]
    
    console.log(lodash.fromPairs(pairs))
}


router.get('/hello', function (req, res) {

    chunk()
    tail()
    union()
    fromPairs()
    res.send('Hello there!')
});

router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})


module.exports = router;
// adding this comment for no reason