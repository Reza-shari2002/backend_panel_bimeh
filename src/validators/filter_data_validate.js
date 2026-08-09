const joi = require('joi');

const schema = joi.object({phone:joi.string().max(12).allow("", null)  , fullName:joi.string().max(12).allow("" , null)});

module.exports = schema;