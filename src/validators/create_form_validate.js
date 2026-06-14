const joi = require("joi");

const create_form_validator = joi.object({
  phone_number: joi.string().max(50).required(),
  address: joi.string().max(50).required(),
  postal_code: joi.string().max(50).required(),
  has_discount_transfer: joi.boolean().required(),
  has_active_insurance_transfer: joi.boolean().required(),
  is_relative_transfer: joi.boolean().required(),
});


module.exports = create_form_validator;
