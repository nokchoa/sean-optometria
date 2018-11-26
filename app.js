const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const passport = require('passport');
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

require('./server/config/passport')(passport);

routes(app, passport);

app.use(express.static('dist/sean-optometria'));

module.exports = app;
