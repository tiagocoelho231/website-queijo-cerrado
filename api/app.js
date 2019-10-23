const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const apiRoutes = require('./api-routes');
const adminRoutes = require('./admin-routes');

const app = express();

app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

app.use(bodyParser.json({ limit: '10mb', extended: true }));

app.use(express.static('public'));

app.use(cors({
  exposedHeaders: ['Content-Range']
}));

app.use('/api', apiRoutes);

app.use('/admin', adminRoutes);

module.exports = app;