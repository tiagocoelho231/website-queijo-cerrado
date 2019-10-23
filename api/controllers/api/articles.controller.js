const Article = require('../../models/article.model');

exports.index = async (req, res) => {
	try {
		const articles = await Article.find({}, 'title description url');
		return res.json(articles);
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
		res.status(400).send(error);
	}
}