const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const apiRoutes = require('./api-routes');
const adminRoutes = require('./admin-routes');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(cors({
  exposedHeaders: ['Content-Range']
}));

app.use('/api', apiRoutes);

app.use('/admin', adminRoutes);

module.exports = app;