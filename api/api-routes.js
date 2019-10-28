const Router = require('express').Router;
const router = Router();

const { articlesController, categoriesController, markersController, messagesController, pagesController } = require('./controllers/api');

router.route('/categories')
  .get(categoriesController.index);

router.route('/messages')
  .post(messagesController.save);

router.route('/articles')
  .get(articlesController.index);

router.route('/articles/:article')
  .get(articlesController.view);

router.route('/pages')
  .get(pagesController.index);

router.route('/pages/:page')
  .get(pagesController.view);

router.route('/markers')
  .get(markersController.index);

module.exports = router;