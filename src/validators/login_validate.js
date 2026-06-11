const joi = require('joi');

const login_validate = joi.object({user_name:joi.string().required() , password:joi.string().required()})


module.exports = login_validate;