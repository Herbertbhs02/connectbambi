const router = require('express').Router()
const User = require('../model/User')
const verify = require('./verifyToken')

router.post('/listall', async(req, res)=>{
    
    const user = await User.find()
    if(!user) return res.send('List of registered use not found')
       res.send(user)

           });

module.exports = router