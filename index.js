const express = require('express');
const path = require('path');
const app = express();
const logger = require('./middleware/logger');
const exphbs = require('express-handlebars')
const members = require('./Members')

const PORT = process.env.PORT || 3001;


app.listen((PORT), () => console.log(`Connection established on port ${PORT}`));

// Init Middleware
app.use(logger);

// Handlebars Middleware

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body Parser Init
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// Homepage Route

app.get('/', (req, res) => res.render('index', {title: 'Members App', members }));

// // Set static folder:
// app.use(express.static(path.join(__dirname, 'public')));

// Members API Routes:
app.use('/api/members', require('./routes/api/members'))

// Set other routes:

