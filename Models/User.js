const mongoose = require("mongoose");

var users = mongoose.Schema({
    name: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true,
        // unique: true,
    },

    password: {
        type: String,
        require: true,
        // unique:true
    },
    
    phone: {
        type: String,
        require: true

    }
});
// var abc = mongoose.Schema({
//     email: {
//         type:String,
//         require: true
//     },
//     password: {
//         type: String,
//         require: true
//     },

// });
const detail1 = new mongoose.model("detail1", users );

// const create_coll = async ()=>{
//     const res = await detail1.find({email:"ayushsharma199810@gmail.com", password: '541564564451'})
//     console.log(res[0].email);
    
    
    
// }

module.exports = detail1;
    
    
   

// const bcd = function (req,res){

//     res.sendFile(path.join(__dirname, '/index.html'));
// };