const mongoose = require('mongoose')
const messagesSchema = new mongoose.Schema({
    receiverId:{
        type:String,
        required:true,
        min:6,
        max:1000
    },
    senderId:{
        type:String,
        required:true,
        min:6,
        max:1000
    },
    sendername:{
        type:String,
        require:true,
        min:6,
        max:256
    },
 
    sendersurname:{
        type:String,
        require:true,
        min:6,
        max:256
    },
    value:{
        type:String,
        min:2,
        max:1000
    }, 
     
    d:{
        type:String,
        required:true,
        min:6,
        max:1000
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Message', messagesSchema)