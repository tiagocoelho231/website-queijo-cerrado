const Router = require('express').Router;
const router = Router();

const { categoriesController, markersController, messagesController, pagesController } = require('./controllers/api');

router.route('/categories')
  .get(categoriesController.index);

router.route('/messages')
  .post(messagesController.save);

router.route('/pages')
  .get(pagesController.index);

router.route('/pages/:id')
  .get(pagesController.view);

router.route('/markers')
  .get(markersController.index);

module.exports = router;