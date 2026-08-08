const joi = require('joi');

const car_validate_schema = joi.object({  page: joi.number().integer().min(1).default(1),
  limit: joi.number().integer().min(1).max(100).default(7)})



module.exports = car_validate_schema;