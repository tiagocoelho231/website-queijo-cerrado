const Router = require('express').Router;
const router = Router();

const { categoriesController, messagesController, pagesController } = require('./controllers/admin');

router.route('/categories')
  .get(categoriesController.index)
  .post(categoriesController.create);

router.route('/categories/:id')
  .get(categoriesController.view)
  .patch(categoriesController.update)
  .put(categoriesController.update)
  .delete(categoriesController.remove);

router.route('/pages')
  .get(pagesController.index)
  .post(pagesController.create);

router.route('/pages/:id')
  .get(pagesController.view)
  .patch(pagesController.update)
  .put(pagesController.update)
  .delete(pagesController.remove);

router.route('/messages')
  .get(messagesController.index);

router.route('/messages/:id')
  .get(messagesController.view)
  .delete(messagesController.remove);

module.exports = router;