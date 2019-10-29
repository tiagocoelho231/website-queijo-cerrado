const Router = require('express').Router;
const router = Router();
const multer = require('multer');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: (req, _file, cb) => {
    const dir = `public/uploads/${req.params.resource}`;
    if (!fs.existsSync(dir)) fs.mkdirSync(dir); // checking if folder exists
    cb(null, dir);
  }, // where the files are being stored
  filename: (_req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`) // getting the file name
});
const upload = multer({ storage });

const { articlesController, categoriesController, markersController, messagesController, pagesController, uploadsController } = require('./controllers/admin');

router.route('uploads/:resource')
  .post(upload.single('file'), uploadsController.create);

router.route('/articles')
  .get(articlesController.index)
  .post(articlesController.create);

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