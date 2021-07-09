const mongoose = require('mongoose')

const DesignerSchema = new mongoose.Schema({
    nome: String,
    social: String,
    nascimento: String,
    marcaId: String,
}, { timestamp: true })

module.exports = mongoose.model('Designer', DesignerSchema)