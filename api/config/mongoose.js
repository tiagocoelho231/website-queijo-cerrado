const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/queijo-cerrado', { useNewUrlParser: true });

module.exports = mongoose;