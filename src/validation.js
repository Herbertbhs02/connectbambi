const Joi = require('@hapi/joi');


const validationregister = (data)=>{

    const schema = Joi.object({
        name:Joi.string().min(3).required(),
        surname:Joi.string().min(3).required(),
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required(),
        message:Joi.string().min(2)
    })
return schema.validate(data)
}

const validationlogin = (data)=>{

    const schema = Joi.object({
        
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required()
    })
return schema.validate(data)
}


module.exports.validationregister = validationregister
module.exports.validationlogin = validationlogin

