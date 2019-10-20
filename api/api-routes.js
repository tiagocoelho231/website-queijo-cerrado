const Router = require('express').Router;
const router = Router();

const { categoriesController, messagesController, pagesController } = require('./controllers/api');

router.route('/categories')
  .get(categoriesController.index);

router.route('/messages')
  .post(messagesController.save);

router.route('/pages')
  .get(pagesController.index);

router.route('/pages/:id')
  .get(pagesController.view);


module.exports = router;