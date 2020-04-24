const router = require('express').Router()
const Messages = require('../model/Post')
//const verify = require('./verifyToken')

router.post('/retrieve',async(req, res)=>{
     
    const messages = await Messages.find({receiverId:req.body.receiverId},{'sendername':1,sendersurname:1, receiverId:1,senderId:1,'value':1,'date':1})
    //if(!messages) {return res.send('You have no messages')}
    
       res.send(messages)
      // console.log(messages)

       

});

module.exports = router