const mongoose = require('../config/mongoose');

const messageSchema = mongoose.Schema({
	name: { type: String, required: true },
	phone: { type: String, required: true },
	email: { type: String, required: true },
	message: { type: String, required: true }
}, {
	timestamps: true
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;