const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const routes = require('./server/routes/index');

const app = express();

// Log requests to the console.
if (process.env.NODE_ENV === "development") {
    app.use(logger('dev'));
}

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/api', routes.Animal);
app.use('/api', routes.Specie);
app.use('/api', routes.Class);
app.use('/danger', routes.Table);


// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '/dist/index.html'));
// });
app.use(express.static('dist'));

module.exports = app;
