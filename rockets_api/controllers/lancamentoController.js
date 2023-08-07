
const { Lancamento: LancamentoModel} = require('../models/Lancamento');

const lancamentoController = {

    create: async(req, res) => {
        try {
            const lancamento = {
                dataLancamento: req.body.dataLancamento,
                lancado: req.body.lancado
            }

            const response = await LancamentoModel.create(lancamento)
            res.status(201).json({response, msg:'lancamento criado'})

        } catch (err) {
            console.log(err)
        }
    },

    getAll: async(req, res) => {
        try {
            const lancamentos = await LancamentoModel.find()
            res.json(lancamentos)
        } catch (err) {
            console.log(err)
        }
    }, 

    get: async(req, res) => {
        try {
            const id = req.params.id
            console.log(id)
            const lancamento = await LancamentoModel.findById(id)
            res.json(lancamento)
        } catch (err) {
            console.log(err)
        }
    }, 

    delete: async(req, res) => {
        try {
            const id = req.params.id

            const lancamento = await LancamentoModel.findByIdAndDelete(id)


            res.json(lancamento)
        } catch (err) {
            console.log(err)
        }
    }, 

    update: async(req, res) => {
        try {
            const id = req.params.id

            const lancamento = {
                dataLancamento: req.body.dataLancamento,
                lancado: req.body.lancado
            }

            const updatedLancamento = await LancamentoModel.findByIdAndUpdate(id, lancamento)

            res.json(updatedLancamento)
        } catch (err) {
            console.log(err)
        }
    }, 

}

module.exports = lancamentoController
















