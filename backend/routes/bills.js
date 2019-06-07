const express = require('express');

const router = express.Router();

// GET all bills
router.get('/', (req, res) => {
  res.send('GET all bills');
})

// GET bill detail
router.get('/:id', (req, res) => {
  res.send(`GET detail view for bill id ${req.params.id}`)
})

// POST new bill
router.post('/', (req, res) => {
  res.send('POST new bill');
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