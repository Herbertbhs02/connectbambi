const express = require('express')
const User = require('../model/User')
const router = require('express').Router()
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const {validationregister,validationlogin} = require('../validation')


router.post('/register', async(req,res)=>{
    console.log(req.body)
    //Validate the data before it's used
//const {error} = schema.validate(req.body)
const {error} = validationregister(req.body)
  
      if(error) return res.send({status:400,errorMessage:error.details[0].message})
      //Checking if the user already exist in the DB
      const emailExist = await User.findOne({email:req.body.email})
      if(emailExist) return res.send({status:400,errorMessage:'Email already exist'})

      //hash password
const salt = await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(req.body.password, salt)
    const user = new User({
        name:req.body.name,
        surname:req.body.surname,
        email:req.body.email,
        password:hashedPassword,
        message:req.body.message
    });
    try{
        const savedUser = await user.save();
        res.send({user})
    }catch(error){
        res.send(error)
    }
})

router.post('/login', async(req, res)=>{
    const {error} = validationlogin(req.body)
  
    if(error) return res.send({errorMessage:error.details[0].message,status:400})
    //Checking if the email already exist in the DB
    const user = await User.findOne({email:req.body.email})
    if(!user) return res.send({errorMessage:'Email not found',status:400})
//password is correct
const validPassword = await bcrypt.compare(req.body.password, user.password)
if(!validPassword) return res.send({errorMessage:'Password not correct',status:400})
//Create and assign a token
const token = jwt.sign({id:user._id},'123456789');
res.header('auth-token',token).send({token,id:user._id,name:user.name,status:200})


})




module.exports = router