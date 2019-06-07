const express = require('express');

const app = express();

// Router Imports
const bills = require('./routes/bills');

// Route Configs
app.use('/bills', bills);

app.listen(3000);