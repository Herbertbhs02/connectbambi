const router = require('express').Router()
const Messages = require('../model/Post')
// const verify = require('./verifyToken')

router.post('/delete',async(req, res)=>{
//console.log(req.body.d)
    const messages = await Messages.deleteOne( { _id:req.body.d } )
    if(!messages) return res.send('No messages to delete')
       res.send('deleted')
       

       

});

module.exports = router