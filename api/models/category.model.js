const mongoose = require('../config/mongoose');

const categorySchema = mongoose.Schema({
	name: { type: String, required: true }
});

module.exports = mongoose.model('Category', categorySchema);