const express = require('express');
const externalModule = require('./logger')
const {printDate,printMonth,getBatchInfo} = require('../util/helper')
const {trim,changetoLowercase,changetoUppercase} = require('../validater/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('The constant in logger route has a value '+externalModule.endpoint)
    console.log('The current batch is '+externalModule.batch)
    externalModule.log()
    externalModule.welcome()
    res.send('My first ever api!')
    console.log(printDate())
    console.log(printMonth())
    console.log(getBatchInfo())
    console.log(trim(' Kam ran'))
});

router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason