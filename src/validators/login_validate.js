const joi = require("joi");

const login_validate = joi.object({
  user_name: joi.string().max(50).required(),
  password: joi.string().max(50).required(),
});

module.exports = login_validate;
