const router = require('express').Router()
const verify = require('./verifyToken')
const User = require('../model/User')

router.post('/',verify, async(req,res)=>{
   
    const user = await User.findOne({firstName:req.body.name})
    
    if(!user) return res.send({name:`${req.body.name} not found`})
     res.send({name:user.firstName, email:user.email})
   // console.log(req.headers)
})


module.exports = router