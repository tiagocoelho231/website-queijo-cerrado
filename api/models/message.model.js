const mongoose = require('../config/mongoose');

const messageSchema = mongoose.Schema(
	{
		name: { type: String, required: true },
		phone: { type: String, required: true },
		email: { type: String, required: true },
		message: { type: String, required: true }
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('Message', messageSchema);