const joi = require('joi');

const login_validate = joi.object({access_token:joi.string().required()})


module.exports = login_validate;