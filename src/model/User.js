const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:2,
        max:256
    },

    surname:{
        type:String,
        required:true,
        min:2,
        max:256
    },
    email:{
        type:String,
        require:true,
        min:6,
        max:256
    },
    password:{
        type:String,
        required:true,
        max:256,
        min:6
    },
    message:{
        type:String,
        min:2,
        max:1000
    },   
    date:{
        type:Date,
        default:Date.now
    }
   
})

module.exports = mongoose.model('User', userSchema)