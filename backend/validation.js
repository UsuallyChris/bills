const Joi = require('@hapi/joi');

const billPostValidation = (data) => {
  const schema = {
    name: Joi.string().min(1).required(),
    due_date: Joi.date().min('now').iso(),
    amount_due: Joi.number().precision(2).positive()
  }
  return Joi.validate(data, schema)
}

module.exports.billPostValidation = billPostValidation;

