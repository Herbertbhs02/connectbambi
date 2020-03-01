const jwt = require('jsonwebtoken');
const {tokenSecret} = require('../Secret')

module.exports =function (req,res,next){
    const token = req.header('auth-token')
    if(!token) return res.send('access Denied')

    try{
        const verified = jwt.verify(token, tokenSecret )
        
        req.user = verified;
        next();
    }catch(error){
        console.log(error)
        res.send('Invalid')
        
    }
}
