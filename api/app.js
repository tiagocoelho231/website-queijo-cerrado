const express = require('express');

const apiRouter = require('./routers/api');

const app = express();

console.log(Object.keys(app));

app.use('/api', apiRouter);

module.exports = app;