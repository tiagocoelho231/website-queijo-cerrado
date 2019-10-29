const express = require('express');
const cors = require('cors');

const apiRoutes = require('./api-routes');
const adminRoutes = require('./admin-routes');

const app = express();

app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use(express.json({ limit: '10mb', extended: true }));

app.use(express.static('public'));

app.use(cors({
  exposedHeaders: ['Content-Range']
}));

app.use('/api', apiRoutes);

app.use('/admin', adminRoutes);

module.exports = app;