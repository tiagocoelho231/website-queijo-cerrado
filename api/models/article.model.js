const mongoose = require('../config/mongoose');

const articleSchema = mongoose.Schema({
	title: { type: String, required: true },
	description: { type: Schema.Types.ObjectId, ref: 'categories', required: true },
	image: { type: Object, required: true },
	content: { type: String, required: true },
}, {
	timestamps: true
});

module.exports = mongoose.model('Article', articleSchema);