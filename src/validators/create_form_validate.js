const joi = require("joi");

const create_form_validator = joi.object({
  phone_number: joi.string().max(50).required(),
  address: joi.string().max(50).required(),
  postal_code: joi.string().max(50).required(),
  has_discount_transfer: joi.number().valid(0,1).required(),
  has_active_insurance_transfer: joi.number().valid(0,1).required(),
  is_relative_transfer: joi.number().valid(0,1).required(),
  plate_history_type : joi.number().valid(0,1),
  plate_history_code : joi.number().max(50),
});

module.exports = create_form_validator;
