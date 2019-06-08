const Joi = require('@hapi/joi');

const billPostValidation = (data) => {
  const schema = {
    name: Joi.string().min(1).required(),
    due_date: Joi.date().min('now').iso().required(),
    amount_due: Joi.number().precision(2).positive().required()
  }
  return Joi.validate(data, schema)
}

const billPutValidation = (data) => {
  const schema = {
    name: Joi.string().min(1).required(),
    due_date: Joi.date().min('now').iso().required(),
    amount_due: Joi.number().precision(2).positive().required()
  }
  return Joi.validate(data, schema);
}

module.exports.billPostValidation = billPostValidation;
module.exports.billPutValidation = billPutValidation;

