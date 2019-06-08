const express = require('express');
const router = express.Router();
const { billPostValidation, billPutValidation } = require('../validation');

// Bill model import
const Bill = require('../models/Bill');

// GET all bills
router.get('/', (res) => {
  Bill.find()
    .sort({ due_date: 1 })
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
    due_date: req.body.due_date,
    amount_due: req.body.amount_due
  });

  await bill.save()
    .then(bill => res.json(bill))
    .catch(err => res.json(err))

})

// GET bill detail
router.get('/:id', (req, res) => {
  Bill.findById(req.params.id)
    .then(bill => res.json(bill))
    .catch(err => res.send(err));
})

// PUT update bill
router.put('/:id', async (req, res) => {

  const { error } = billPutValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  };

  await Bill.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(bill => res.json(bill))
    .catch(err => res.send(err));
});

// DELETE bill
router.delete('/:id', (req, res) => {
  Bill.findByIdAndDelete(req.params.id)
    .then(bill => res.json(bill))
    .catch(err => res.json(err));
});

module.exports = router;