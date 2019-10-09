const Category = require('../../models/category.model');

exports.index = async (_req, res) => {
	const { limit } = req.body;
	try {
		const categories = await Category.find({ filter }, null, { limit });
		return res.json(categories);
	} catch (err) {
		res.status(400).send(err);
	}
}

exports.view = async (req, res) => {
	const { id } = req.params;
	try {
		const category = await Category.findById(id);
		return res.json(category);
	} catch (err) {
		res.status(400).send(err);
	}
}

exports.update = async (req, res) => {
	const { id } = req.params;
	const { name } = req.body;
	try {
		const savedCategory = await Category.findById(id);
		const updatedCategory = { ...savedCategory, name }
		const category = await Category.updateOne({ _id: id }, updatedCategory);
		return res.json(category);
	} catch (err) {
		res.status(400).send(err);
	}
}

exports.remove = async (req, res) => {
	const { id } = req.params;
	try {
		const category = await Category.findByIdAndDelete(id);
		return res.json(category);
	} catch (err) {
		res.status(400).send(err);
	}
}