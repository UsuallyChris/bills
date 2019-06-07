const express = require('express');
const router = express.Router();

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
  const bill = new Bill({
    name: req.body.name.trim(),
    due_date: req.body.due_date,
    amount_due: req.body.amount_due
  });
  try {
    const savedBill = await bill.save();
    res.send(savedBill)
  } catch(err) {
    res.status(400).send(err);
  }
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