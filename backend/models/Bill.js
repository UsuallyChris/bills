const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true, 
  },
  date_due: {
    type: Date,
    required: true
  },
  amount_due: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Bill', billSchema);