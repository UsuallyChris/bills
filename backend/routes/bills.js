const express = require('express');
const router = express.Router();

// VALIDATION
const Joi = require('@hapi/joi');

const schema = {
  name: Joi.string().min(1).required(),
  due_date: Joi.date().min('now').iso(),
  amount_due: Joi.number().precision(2).positive()
}

// Bill model import
const Bill = require('../models/Bill');

// GET all bills
router.get('/', (req, res) => {
  res.send('GET all bills');
})

// GET bill detail
router.get('/:id', (req, res) => {
  res.send(`GET detail view for bill id ${req.params.id}`)
})

// POST new bill
router.post('/', async (req, res) => {

  const { error } = Joi.validate(req.body, schema);
  if (error) {
    return res.status(400).send(error.details[0].message);
  };

  const bill = new Bill({
    name: req.body.name.trim(),
    due_date: req.body.due_date,
    amount_due: req.body.amount_due
  });

  await bill.save()
    .then(bill => res.json(bill))
    .catch(err => res.json(err))

})

// PUT update bill
router.put('/:id', (req, res) => {
  res.send('PUT update bill');
});

// DELETE bill
router.delete('/:id', (req, res) => {
  res.send('DELETE bill');
});

module.exports = router;