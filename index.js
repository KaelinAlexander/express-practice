const express = require('express');
const path = require('path');
const app = express();
const logger = require('./middleware/logger');

const PORT = process.env.PORT || 3000;


app.listen((PORT), () => console.log(`Connection established on port ${PORT}`));

// Init Middleware
app.use(logger);

// Body Parser Init
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// Set static folder:
app.use(express.static(path.join(__dirname, 'public')));

// Members API Routes:
app.use('/api/members', require('./routes/api/members'))

// Set other routes:

