const MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose');
const db = require('./app');
const express = require("express");
const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("welcome");

});
app.get('/api/detail1',(req,res) =>{
    mongoose.Collection('detail1').find({}).toArray((err,result)=> {
        res.send(result);

    })

});
var database
app.listen(8000,() => {
    MongoClient.connect('http://localhost:27017/students',{ useNewUrlParser: true } , (err,result)=>{
       
        // database = result.db('students')
        console.log("connection created");

    });

})