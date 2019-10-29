const Article = require('../../models/article.model');

exports.index = async (_req, res) => {
	try {
		const articles = await Article.find({}, 'title description image url');
		return res.json(articles);
	} catch (err) {
		res.status(400).send(err);
	}
}

exports.view = async (req, res) => {
	const { article: url } = req.params;
	try {
		const article = await Article.findOne({ url }, 'title content');
		return res.json(article);
	} catch (error) {
		res.status(400).send(error);
	}
}