const Router = require('express').Router;
const Message = require('../../models/message.model');

const router = Router();

router.post('/', async (req, res) => {
	console.log(req.body)
	const { name, email, phone, message: text } = req.body;
	if (!name || !email || !phone || !text)
		res.status(400);
	const message = new Message({ name, email, phone, message: text });
	try {
		await message.save();
		res.status(201).send(message);
	} catch (err) {
		res.status(400).send(err);
	}
});

module.exports = router;