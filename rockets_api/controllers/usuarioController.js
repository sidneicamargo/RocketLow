const { Usuario: UsuarioModel} = require('../models/Usuario');

const usuarioController = {

    create: async(req, res) => {
        try {
            const usuario = {
                nome: req.body.nome,
                idade: req.body.idade
            }

            const response = await UsuarioModel.create(usuario)
            res.status(201).json({response, msg:'Usuario criado'})

        } catch (err) {
            console.log(err)
        }
    },

    getAll: async(req, res) => {
        try {
            const usuarios = await UsuarioModel.find()
            res.json(usuarios)
        } catch (err) {
            console.log(err)
        }
    }, 

    get: async(req, res) => {
        try {
            const nome = req.params.nome

            const usuario = await UsuarioModel.find({ "nome": nome })
            res.json(usuario)
        } catch (err) {
            console.log(err)
        }
    }, 

    delete: async(req, res) => {
        try {
            const id = req.params.id

            const usuario = await UsuarioModel.findByIdAndDelete(id)


            res.json(usuario)
        } catch (err) {
            console.log(err)
        }
    }, 

    update: async(req, res) => {
        try {
            const id = req.params.id

            const usuario = {
                nome: req.body.nome,
                idade: req.body.idade
            }

            const updatedUsuario = await UsuarioModel.findByIdAndUpdate(id, usuario)

            res.json(usuario)
        } catch (err) {
            console.log(err)
        }
    }, 

}

module.exports = usuarioController
















