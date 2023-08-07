const { Cotacao: CotacaoModel} = require('../models/Cotacao');

const cotacaoController = {

    create: async(req, res) => {
        try {
            const cotacao = {
                "foguete": req.body.foguete,
                "margemLucro": req.body.margemLucro,
                "valorLancamento": req.body.valorLancamento,
            }

            const response = await CotacaoModel.create(cotacao)
            res.status(201).json({response, msg:'cotacao criada'})

        } catch (err) {
            console.log(err)
        }
    },

    getAll: async(req, res) => {
        try {
            const cotacaos = await CotacaoModel.find()
            res.json(cotacaos)
        } catch (err) {
            console.log(err)
        }
    }, 

    get: async(req, res) => {
        try {
            const id = req.params.id

            const cotacao = await CotacaoModel.findById(id)
            res.json(cotacao)
        } catch (err) {
            console.log(err)
        }
    }, 

    delete: async(req, res) => {
        try {
            const id = req.params.id

            const cotacao = await CotacaoModel.findByIdAndDelete(id)


            res.json(cotacao)
        } catch (err) {
            console.log(err)
        }
    }, 

    update: async(req, res) => {
        try {
            const id = req.params.id

            const cotacao = {
                "foguete": req.body.foguete,
                "margemLucro": req.body.margemLucro,
                "valorLancamento": req.body.valorLancamento,
            }

            const updatedcotacao = await CotacaoModel.findByIdAndUpdate(id, cotacao)

            res.json(cotacao)
        } catch (err) {
            console.log(err)
        }
    }, 

}

module.exports = cotacaoController
















