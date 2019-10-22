const Marker = require('../../models/marker.model');

exports.index = async (req, res) => {
	const { type } = req.body;
	query = {}
	try {
		const markers = await Marker.find(query);
		return res.json(markers);
	} catch (err) {
		res.status(400).send(err);
	}
}