const Page = require('../../models/page.model');

exports.index = async (req, res) => {
	try {
		const pages = await Page.find({}, 'title category');
		return res.json(pages);
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