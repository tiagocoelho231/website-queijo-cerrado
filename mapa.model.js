const mongoose = require('../config/mongoose');

const mapaSchema = mongoose.Schema({
    nomeMarcador: { type: String, required: true },
    latitude: { type: String, required: true },
    longitude: { type: String, required: true }
});

module.exports = mongoose.model('Coordenada', mapaSchema);