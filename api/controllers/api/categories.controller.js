const Category = require('../../models/category.model');

exports.index = async (_req, res) => {
	try {
		const categories = await Category.find({}, 'name url');
		return res.json(categories);
	} catch (err) {
		res.status(400).send(err);
	}
}