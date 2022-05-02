// const mongoose = require("mongoose");
// mongoose.connect('mongodb://localhost/students');
// var db=mongoose.connection;
// db.on('error', console.error.bind(console, "connection error"));
// db.once('open', function(callback){
//     console.log("connection succeeded at port http://localhost:" +port);
// })
// db.collection("students").find("ayushsharma199810@gmail.com").toArray=(err,result) => {
//     console.log(result);

const detail1 = require('./Models/User');

// }   
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { };
 
//   detail1.find({}, function(err, docs){
//     if(err) res.json(err);
//     else    res.render('index', {detail1 : docs});
// });
