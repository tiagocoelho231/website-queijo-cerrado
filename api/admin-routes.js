const Router = require('express').Router;
const router = Router();

const { messagesController } = require('./controllers/admin');

router.route('/messages').
  get(messagesController.index);

router.route('/messages/:id')
  .get(messagesController.view)
  .delete(messagesController.remove);

module.exports = router;