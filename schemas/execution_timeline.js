const Joi = require('joi');

module.exports = Joi.object().keys({
  title: Joi.string(),
  date: Joi.date(),
  description: Joi.string()
})