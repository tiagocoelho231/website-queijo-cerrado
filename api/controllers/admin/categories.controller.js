const Category = require('../../models/category.model');

exports.index = async (req, res) => {
	const { filter, limit } = req.body;
	try {
		const data = await Category.find({ filter }, 'name url', { limit });
		const total = await Category.countDocuments();
		return res.json({ total, data });
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

exports.create = async (req, res) => {
	const { name, url } = req.body;
	const newCategory = new Category({ name, url });
	try {
		const category = await newCategory.save();
		return res.json(category);
	} catch (err) {
		res.status(400).send(err);
	}
}

exports.update = async (req, res) => {
	const { id } = req.params;
	const { name, url } = req.body;
	try {
		const category = await Category.findById(id);
		category.name = name || category.name;
		category.url = url || category.url;
		const updatedCategory = await category.save();
		return res.json(updatedCategory);
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