const mongoose = require('mongoose')

const StyleSchema = new mongoose.Schema({
    nome: String,
    descricao: String,
    ano: String,
    surgimento: String,
}, { timestamp: true })

module.exports = mongoose.model('Style', StyleSchema)