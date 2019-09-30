const mongoose = require('../config/mongoose');

const pageSchema = mongoose.Schema({
	title: { type: String, required: true },
	category: { type: Schema.Types.ObjectId, ref: 'categories', required: true },
	content: { type: String, required: true }
}, {
	timestamps: true
});

const Page = mongoose.model('Page', pageSchema);

module.exports = Page;