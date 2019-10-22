const mongoose = require('../config/mongoose');

const markerSchema = mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, enum: ['Produtor', 'Ponto de Venda'], required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true }
});

module.exports = mongoose.model('Marker', markerSchema);