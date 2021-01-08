const express = require('express');
const path = require('path');
const app = express();
const members = require('./Members');
const logger = require('./middleware/logger');

const PORT = process.env.PORT || 3000;


app.listen((PORT), () => console.log(`Connection established on port ${PORT}`));

// Init Middleware

app.use(logger);

// Set static folder:

app.use(express.static(path.join(__dirname, 'public')));

// Set other routes:

// Gets all members:
app.get('/api/members', (req, res) => {
    res.json(members.join());
});

//

