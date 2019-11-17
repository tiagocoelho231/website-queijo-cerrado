const Message = require('../../models/message.model');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('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');

exports.save = async (req, res) => {
	const { name, email, phone, message: text } = req.body;
	const message = new Message({ name, email, phone, message: text });
	const mailMessage = {
		to: 'tiagorc@unipam.edu.br',
		from: email,
		subject: 'Contato - Queijo Minas Artesanal do Cerrado',
		text
	};
	try {
		await message.save();
		await sgMail.send(mailMessage);
		res.status(201).send(message);
	} catch (err) {
		res.status(400).send(err);
	}
}