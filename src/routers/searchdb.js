const router = require('express').Router()
const User = require('../model/User')
const verify = require('./verifyToken')

router.post('/searchdb',verify, async(req, res)=>{
    
    const user = await User.find({surname:req.body.surname})
    if(!user) return res.send('Name not found')
       res.send(user)

           });

module.exports = router