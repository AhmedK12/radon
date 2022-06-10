const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const moment = require('moment')
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://ahmedkamaran893:likasA123@cluster0.svpuoqb.mongodb.net/kamaran4?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(function(req,res,next){
    console.log(moment().format("YYYY-MM-DD hh:mm:ss ")+  " " + req.ip.toString().replace('::ffff:', '') + "   "+  req.path)
})


app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});


