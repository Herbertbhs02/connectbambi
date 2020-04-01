const router = require('express').Router()
const Messages = require('../model/Post')
//const verify = require('./verifyToken')

router.post('/posts', async(req, res)=>{

    const messages= new Messages({
        receiverId:req.body.receiverId,
        senderId:req.body.senderId,
        sendername:req.body.sendername,
        sendersurname:req.body.sendersurname,
        value:req.body.value
                            })
       const savedmessages = await messages.save()
       res.send()
       

       

});

module.exports = router