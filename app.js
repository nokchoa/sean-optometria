const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const routes = require('./server/routes/index');

const app = express();

// Log requests to the console.
// if (process.env.NODE_ENV === "development") {
// }
app.use(logger('dev'));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

routes(app);

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '/dist/index.html'));
// });
app.use(express.static('dist'));

module.exports = app;
