const Router = require('express').Router;
const router = Router();

const { messagesController } = require('./controllers/api');

router.route('/messages')
  .post(messagesController.save);

module.exports = router;