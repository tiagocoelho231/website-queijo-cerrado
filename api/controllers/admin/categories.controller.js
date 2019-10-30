const Category = require('../../models/category.model');
const Page = require('../../models/page.model')

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
	const expectedOptions = ['name', 'url'];
	const { id } = req.params;
	try {
		const category = await Category.findById(id);
		expectedOptions.forEach(option => category[option] = req.body[option] || category[option]);
		const updatedCategory = await category.save();
		return res.json(updatedCategory);
	} catch (err) {
		res.status(400).send(err);
	}
}

exports.remove = async (req, res) => {
	const { id } = req.params;
	try {
		const relatedPages = await Page.find({ category: id })
		if (relatedPages.length)
			return res.status(400).send({ message: 'Antes de remover a categoria, remova as páginas relacionadas.' })
		const category = await Category.findByIdAndDelete(id);
		return res.json(category);
	} catch (err) {
		res.status(400).send(err);
	}
}