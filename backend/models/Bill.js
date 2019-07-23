const mongoose = require('mongoose');

const BillSchema = new mongoose.Schema({
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
  },
  category: {
    type: String,
    enum: ['utilities', 'credit_card', 'home', 'education', 'vehicle', 'other'],
    required: true
  }
});

BillSchema
  .virtual('formatted_date_due')
  .get(function() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[this.date_due.getUTCMonth()];

    return `${month} ${this.date_due.getUTCDate()}, ${this.date_due.getUTCFullYear()}`
  });

BillSchema
  .virtual('formatted_amount_due')
  .get(function() {

    const formattedAmountDue = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    })

    return formattedAmountDue.format(this.amount_due);
  })

BillSchema.set('toJSON', { getters: true });

module.exports = mongoose.model('Bill', BillSchema);