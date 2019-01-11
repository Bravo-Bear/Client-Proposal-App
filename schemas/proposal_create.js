const Joi = require('joi');
const execution_timeline = require('./execution_timeline')
module.exports = Joi.object().min(1).keys({
  title: Joi.string(),
  subtitle: Joi.string(),
  dri: Joi.string(),
  project_details: Joi.string(),
  target_completion_date: Joi.date(),
  project_length: Joi.string(),
  development_hours: Joi.number(),
  total_price: Joi.number(),
  execution_timeline: Joi.array().items(execution_timeline),
  ongoing_charges: Joi.string()
});