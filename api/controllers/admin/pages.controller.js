const Page = require('../../models/page.model');

exports.index = async (req, res) => {
	const { filter, limit } = req.body;
	try {
		const pages = await Page.find({ filter }, null, { limit });
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

exports.remove = async (req, res) => {
	const { id } = req.params;
	try {
		const page = await Page.findByIdAndDelete(id);
		return res.json(page);
	} catch (error) {
		res.status(400).send(err);
	}
}