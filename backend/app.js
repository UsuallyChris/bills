const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// dotenv
dotenv.config();

// Mongoose Connection
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true},
  () => console.log('connected to db')
);

// Router Imports
const bills = require('./routes/bills');

// Route Configs
app.use('/bills', bills);

app.listen(3000);