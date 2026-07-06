const joi = require("joi");

const send_notification_validate = joi.object({
  full_name:joi.string().max(80).required() ,
    
  message: joi.string().max(80).required(),
  phone_number:joi.string().max(11).required(),
});

module.exports = send_notification_validate;
