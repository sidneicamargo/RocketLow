const mongoose = require('mongoose');

const { Schema } = mongoose


const lancamentoSchema = new Schema({
    dataLancamento: Date,
    lancado: Boolean,
}, {timestamps: true})

const Lancamento = mongoose.model('Lancamento', lancamentoSchema)

module.exports = {
    Lancamento,
    lancamentoSchema,
}



