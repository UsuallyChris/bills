const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// dotenv
dotenv.config();

// Mongoose Connection
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true },
).catch( (reason) => {
  console.log(reason);
});

// Middleware
app.use(express.json());
app.use(cors());

// Router Imports
const bills = require('./routes/bills');

// Route Configs
app.use('/api/bills', bills);

// Deploy Config
if(process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));

  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

app.listen(process.env.PORT || 5000);