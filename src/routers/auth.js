const express = require('express')
const User = require('../model/User')
const router = require('express').Router()
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const {tokenSecret} = require('../Secret')

const {validationregister,validationlogin} = require('../validation')


router.post('/register', async(req,res)=>{
console.log(req.body)
    //Validate the data before it's used
//const {error} = schema.validate(req.body)
const {error} = validationregister(req.body)
  
      if(error) return res.status(400).send(error.details[0].message)
      //Checking if the user already exist in the DB
      const emailExist = await User.findOne({email:req.body.email})
      if(emailExist) return res.status(400).send('Email already exist')

      //hash password
const salt = await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(req.body.password, salt)
    const user = new User({
        firstName:req.body.firstName,
        email:req.body.email,
        password:hashedPassword
    });
    try{
        const savedUser = await user.save();
        //res.send({user:user._id})
        res.send({user:user})
    }catch(error){
        res.status(400).send(error)
    }
})

router.post('/login', async(req, res)=>{
    const {error} = validationlogin(req.body)
  
    if(error) return res.status(400).send(error.details[0].message)
    //Checking if the email already exist in the DB
    const user = await User.findOne({email:req.body.email})
    if(!user) return res.status(400).send('Email not found')
//password is correct
const validPassword = await bcrypt.compare(req.body.password, user.password)
if(!validPassword) return res.status(400).send('Password not correct')
//Create and assign a token
const token = jwt.sign({id:user._id},tokenSecret);
res.header('auth-token',token).send({token,login:'successful login'})
//res.send('login')



})


module.exports = router