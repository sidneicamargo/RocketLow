const router = require('express').Router();

const usuarioController = require("../controllers/usuarioController");
const lancamentoController = require("../controllers/lancamentoController"); 
const cotacaoController = require("../controllers/cotacaoController");

router.route("/usuario/create").post((req, res) => usuarioController.create(req, res))
router.route("/usuario").get((req, res) => usuarioController.getAll(req, res))
router.route("/usuario/:nome").get((req, res) => usuarioController.get(req, res))
router.route("/usuario/:id").delete((req, res) => usuarioController.delete(req, res))
router.route("/usuario/:id").put((req, res) => usuarioController.update(req, res))


router.route("/lancamento/create").post((req, res) => lancamentoController.create(req, res))
router.route("/lancamento").get((req, res) => lancamentoController.getAll(req, res))
router.route("/lancamento/:id").get((req, res) => lancamentoController.get(req, res))
router.route("/lancamento/:id").delete((req, res) => lancamentoController.delete(req, res))
router.route("/lancamento/:id").put((req, res) => lancamentoController.update(req, res))



router.route("/cotacao/create").post((req, res) => cotacaoController.create(req, res))
router.route("/cotacao").get((req, res) => cotacaoController.getAll(req, res))
router.route("/cotacao/:id").get((req, res) => cotacaoController.get(req, res))
router.route("/cotacao/:id").delete((req, res) => cotacaoController.delete(req, res))
router.route("/cotacao/:id").put((req, res) => cotacaoController.update(req, res))



module.exports = router











