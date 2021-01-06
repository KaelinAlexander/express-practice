const express = require('express');

// Init Express

const app = express();

// Create endpoints/route handlers

app.get('/', function(req, res) {
    res.send('Hello again, world!');
})

// Listen on a port:

app.listen(5000);