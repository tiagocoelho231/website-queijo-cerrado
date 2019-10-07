const express = require('express');
const bodyParser = require('body-parser');

const apiRoutes = require('./api-routes');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use('/api', apiRoutes);

module.exports = app;