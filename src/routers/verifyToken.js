const jwt = require('jsonwebtoken');
//const {tokenSecret} = require('../Secret')
require('dotenv').config({path: __dirname + '/../.env'})
const tokenSecret = process.env.tokenSecret

module.exports =function (req,res,next){
    const token = req.header('auth-token')
    if(!token) return res.send('access Denied')

    try{
        const verified = jwt.verify(token, tokenSecret )
        
        req.user = verified;
        next();
    }catch(error){
        
        res.send('Invalid')
        
    }
}
