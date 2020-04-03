const router = require('express').Router()
const User = require('../model/User')
const verify = require('./verifyToken')

router.post('/searchdb',verify, async(req, res)=>{
    //use regex to search surnames with both lower and upper letter
    
var regex = new RegExp(["^",req.body.surname , "$"].join(""), "i");
    
    const user = await User.find({surname:regex})
    if(!user) return res.send('Name not found')
       res.send(user)
           });

module.exports = router