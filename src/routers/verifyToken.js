const jwt = require('jsonwebtoken');


function auth(req,res,next){
    const token = req.header('auth-token')
    if(!token) return res.status(400).send('access Denied')

    try{
        const verified = jwt.verify(token, 123456789 )
        req.user = verified;
    }catch(error){
        res.status(400).send('Invalid')
    }
}
