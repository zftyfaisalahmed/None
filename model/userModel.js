const mongoose = require('mongoose')
const userInfo = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        trim : true,
        unique : [true, "Email is already Exist"]
    },
    mobile : {
        type : Number,
        required : true,
        trim : true,
        unique : [true, "Mobile Number is already Exist"]
    },
    message : {
        type : String,
        required : true,
        trim : true
    }
},{
    collection : "user",
    timestamps : true
})

module.exports = mongoose.model("user", userInfo)