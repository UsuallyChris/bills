const express = require('express');
const router = express.Router();
const { billPostValidation, billPutValidation } = require('../validation');

// Bill model import
const Bill = require('../models/Bill');

// GET all bills
router.get('/', (req, res) => {
  Bill.find()
    .sort({ date_due: 1 })
    .then(bills => res.json(bills))
    .catch(err => res.json(err));
})

// POST new bill
router.post('/', async (req, res) => {

  const { error } = billPostValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  };

  const bill = new Bill({
    name: req.body.name.trim(),
    date_due: req.body.date_due,
    amount_due: req.body.amount_due,
    category: req.body.category
  });

  await bill.save()
    .then(bill => res.json(bill))
    .catch(err => res.json(err))

})

// GET bill detail
router.get('/:id', (req, res) => {
  Bill.findById(req.params.id)
    .then(bill => res.json(bill))
    .catch(err => res.status(404).json(err));
})

// PUT update bill
router.put('/:id', async (req, res) => {

  const { error } = billPutValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  };

  await Bill.findByIdAndUpdate(req.params.id, req.body, {new: true, useFindAndModify: false})
    .then(bill => res.json(bill))
    .catch(err => res.json(err));
});

// DELETE bill
router.delete('/:id', (req, res) => {
  Bill.findByIdAndDelete(req.params.id)
    .then(bill => res.json(bill))
    .catch(err => res.json(err));
});

module.exports = router;