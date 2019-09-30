const mongoose = require('../config/mongoose');

const categorySchema = mongoose.Schema({
	name: { type: String, required: true },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;