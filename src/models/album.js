const mongoose = require('mongoose')

const AlbumSchema = new mongoose.Schema({
    nome: String,
    artista: String,
    ano: Number,
    generos: [String],
    faixas: [String],
    lancamento: Date,
})

module.exports = mongoose.model('Album', AlbumSchema)