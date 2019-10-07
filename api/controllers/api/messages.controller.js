const Message = require('../../models/message.model');

exports.save = async (req, res) => {
	console.log(req.body)
	const { name, email, phone, message: text } = req.body;
	const message = new Message({ name, email, phone, message: text });
	try {
		await message.save();
		res.status(201).send(message);
	} catch (err) {
		res.status(400).send(err);
	}
}