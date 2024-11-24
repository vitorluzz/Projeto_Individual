var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/cadastrarChamado", function (req, res) {
    usuarioController.cadastrarChamado(req, res);
})



var pesquisaController = require('../controllers/pesquisaController')

router.post("/inserirPontuacao", function (req, res) {
    pesquisaController.inserirPontuacao(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/listar10Melhores", function () {
    pesquisaController.listar10Melhores();
});

module.exports = router;