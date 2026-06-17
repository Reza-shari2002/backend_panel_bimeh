const joi = require("joi");

const create_form_validator = joi.object({
  full_name : joi.string().max(50).required() , 
  phone_number: joi.string().max(50).required(),
  address: joi.string().max(50).required(),
  postal_code: joi.string().max(150).required(),
  has_discount_transfer: joi.string().valid("0","1").required(),
  has_active_insurance_transfer: joi.string().valid("0","1").required(),
  is_relative_transfer: joi.string().valid("0","1").required(),
  plate_history_type : joi.string().valid("0","1","2").required(),
  document_car_type : joi.string().valid("0","1").required(),
plate_history_code: joi.string().max(50).allow('', null).optional(),

});

const plate_history_validator = joi.string().max(50).required();


module.exports.plate_history_validator = plate_history_validator;
module.exports.create_form_validator = create_form_validator;
