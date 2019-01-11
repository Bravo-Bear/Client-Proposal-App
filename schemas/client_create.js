const Joi = require('joi');

module.exports = Joi.object().min(1).keys({
  company_name: Joi.string(),
  address: Joi.string(),
  phone_number: Joi.string(),
  email: Joi.string(),
  website: Joi.string()
})