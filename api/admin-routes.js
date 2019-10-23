const Router = require('express').Router;
const router = Router();

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

const upload = multer({ storage })

const { articlesController, categoriesController, markersController, messagesController, pagesController } = require('./controllers/admin');

router.route('/articles')
  .get(articlesController.index)
  .post(upload.single('image'), articlesController.create);

router.route('/articles/:id')
  .get(articlesController.view)
  .patch(articlesController.update)
  .put(articlesController.update)
  .delete(articlesController.remove);

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

router.route('/markers')
  .get(markersController.index)
  .post(markersController.create);

router.route('/markers/:id')
  .get(markersController.view)
  .patch(markersController.update)
  .put(markersController.update)
  .delete(markersController.remove);

module.exports = router;