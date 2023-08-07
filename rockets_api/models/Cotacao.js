const mongoose = require('mongoose')

const { Schema } = mongoose

const cotacaoSchema = new Schema({
    foguete: Number,
    margemLucro: Number,
    valorLancamento: Number,
}, {timestamps: true})

const Cotacao = mongoose.model('Cotacao', cotacaoSchema)

module.exports = {
    Cotacao,
    cotacaoSchema,
}


