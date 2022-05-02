const express =require('express');
const app = express();
const register = require('../Models/User');
const path = require("path");
const mongoose = require("mongoose");
const { json } = require('express/lib/response');
var db = mongoose.connection;


const logindetail= async (req,res) => {
    
const c = req.body
  
  
  const val = await register.find({email: `${c.email1}` , password: `${c.password1}`}).count();
  console.log(val);

  if(val!=0){
    res.sendFile(path.join(__dirname,"../validate.html"));
}
else{
    console.log("invalid");
}
  }
  
    
const register_user = async (req,res) => {

    
    // var qw = a.email;
    // var wp = a.password;
    // console.log(a.email);
    const a = new register(req.body);
    console.log(a);
    await a.save();
    
    res.sendFile(path.join(__dirname,"../signup_success.html"));   
};
const validate = async (req,res) => {
    
   

    
    

    res.sendFile(path.join(__dirname,"../validate.html"))

}
const display = (req,res) => {
    // console.log(register.create_coll());
 

    // console.log(register.detail1);
    res.sendFile(path.join(__dirname,"../index.html")); 
};
module.exports = {register_user,display,logindetail,validate};

 

  
  
