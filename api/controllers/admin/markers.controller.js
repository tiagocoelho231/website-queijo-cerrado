const Marker = require('../../models/marker.model');

exports.index = async (req, res) => {
	const { filter, limit } = req.body;
	try {
		const data = await Marker.find({ filter }, null, { limit });
		const total = await Marker.countDocuments();
		return res.json({ total, data });
	} catch (err) {
		res.status(400).send(err);
	}
}

exports.view = async (req, res) => {
	const { id } = req.params;
	try {
		const marker = await Marker.findById(id);
		return res.json(marker);
	} catch (err) {
		res.status(400).send(err);
	}
}

exports.create = async (req, res) => {
	const { name, type, latitude, longitude } = req.body;
	const newMarker = new Marker({ name, type, latitude, longitude });
	try {
		const marker = await newMarker.save();
		return res.json(marker);
	} catch (err) {
		res.status(400).send(err);
	}
}

exports.update = async (req, res) => {
	const { id } = req.params;
	const expectedOptions = ['name', 'type', 'latitude', 'longitude'];
	try {
		const marker = await Marker.findById(id);
		expectedOptions.forEach(option => marker[option] = req.body[option] || marker[option]);
		const updatedMarker = await marker.save();
		return res.json(updatedMarker);
	} catch (err) {
		res.status(400).send(err);
	}
}

exports.remove = async (req, res) => {
	const { id } = req.params;
	try {
		const marker = await Marker.findByIdAndDelete(id);
		return res.json(marker);
	} catch (err) {
		res.status(400).send(err);
	}
}