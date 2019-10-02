const Router = require('express').Router;
const router = Router();

const messages = require('./messages.router');

router.use('/messages', messages);

module.exports = router;