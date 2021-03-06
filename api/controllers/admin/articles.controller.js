const Article = require('../../models/article.model');

exports.index = async (req, res) => {
	const { filter, limit } = req.body;
	try {
		const articles = await Article.find({ filter }, 'title description url', { limit });
		return res.json({ total: articles.length, limit, data: articles });
	} catch (err) {
		res.status(400).send(err);
	}
}

exports.view = async (req, res) => {
	const { id } = req.params;
	try {
		const article = await Article.findById(id);
		return res.json(article);
	} catch (error) {
		res.status(400).send(err);
	}
}

exports.create = async (req, res) => {
	const { title, description, content, image, url } = req.body;
	const newArticle = new Article({ title, description, content, image, url });
	try {
		const article = await newArticle.save();
		return res.json(article);
	} catch (err) {
		res.status(400).send(err);
	}
}

exports.update = async (req, res) => {
	const expectedOptions = ['title', 'description', 'content', 'image', 'url'];
	const { id } = req.params;
	try {
		const article = await Article.findById(id);
		expectedOptions.forEach(option => article[option] = req.body[option] || article[option]);
		const updatedArticle = await article.save();
		return res.json(updatedArticle);
	} catch (err) {
		res.status(400).send(err);
	}
}

exports.remove = async (req, res) => {
	const { id } = req.params;
	try {
		const article = await Article.findByIdAndDelete(id);
		return res.json(article);
	} catch (error) {
		res.status(400).send(err);
	}
}