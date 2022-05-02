var express=require("express");
var bodyParser=require("body-parser");
const port = 20000;  
const path = require("path");
const mongoose = require('mongoose');
const { route } = require("express/lib/application");
mongoose.connect('mongodb://localhost/students');
var db=mongoose.connection;
db.on('error', console.error.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("connection succeeded at port http://localhost:" +port);
})

var app=express();
// app.use(bodyParser.json());
// app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
const rout = require('./Routes/User')
app.use("/" ,rout);
app.listen(port);
module.exports = {db};
