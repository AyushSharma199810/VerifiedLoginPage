const express =require('express');
const app = express();
const register = require('../Models/User');
const path = require("path");
const mongoose = require("mongoose");
const { json } = require('express/lib/response');
var db = mongoose.connection;


const logindetail= async (req,res) => {
    
//   const c= req.body.email;
//   console.log(c);
  
  const re = await register.find({email: req.body.email , password: req.body.password});
    console.log(re);
    };
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

 

  
  
