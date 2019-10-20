const Page = require('../../models/page.model');

exports.index = async (req, res) => {
	const { filter, limit } = req.body;
	try {
		const pages = await Page.find({ filter }, 'title category description url', { limit });
		return res.json({ total: pages.length, limit, data: pages });
	} catch (err) {
		res.status(400).send(err);
	}
}

exports.view = async (req, res) => {
	const { id } = req.params;
	try {
		const page = await Page.findById(id);
		return res.json(page);
	} catch (error) {
		res.status(400).send(err);
	}
}

exports.create = async (req, res) => {
	const { title, category, content, url } = req.body;
	const newPage = new Page({ title, category, content, url });
	try {
		const page = await newPage.save();
		return res.json(page);
	} catch (err) {
		res.status(400).send(err);
	}
}

exports.update = async (req, res) => {
	const expectedOptions = ['title', 'category', 'content', 'url'];
	const { id } = req.params;
	try {
		const page = await Page.findById(id);
		expectedOptions.forEach(option => page[option] = req.body[option] || page[option]);
		const updatedPage = await page.save();
		return res.json(updatedPage);
	} catch (err) {
		res.status(400).send(err);
	}
}

exports.remove = async (req, res) => {
	const { id } = req.params;
	try {
		const page = await Page.findByIdAndDelete(id);
		return res.json(page);
	} catch (error) {
		res.status(400).send(err);
	}
}