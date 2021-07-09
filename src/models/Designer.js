const mongoose = require('mongoose')

const DesignerSchema = new mongoose.Schema({
    nome: String,
    social: String,
    nascimento: Number,
    marcaId: String,
}, { timestamp: true })

module.exports = mongoose.model('Designer', DesignerSchema)