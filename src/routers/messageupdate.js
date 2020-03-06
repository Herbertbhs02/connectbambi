const router = require('express').Router()
const User = require('../model/User')
const verify = require('./verifyToken')

router.post('/messageupdate', async(req, res)=>{

    const user = await User.updateOne({_id:req.body.id},{$set:{message:req.body.message}})
    if(!user) return res.send('Message not updated')
       res.send('Update done')
       console.log(user)

       

});

module.exports = router