const mongoose = require('../config/mongoose');

const articleSchema = mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	image: { type: Object, required: true },
	content: { type: String, required: true },
	url: { type: String, required: true }
}, {
	timestamps: true
});

module.exports = mongoose.model('Article', articleSchema);