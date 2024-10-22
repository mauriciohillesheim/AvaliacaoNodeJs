const express = require('express');
const ControllerCalculadora = require('../controllers/calculadora');
const router = express.Router();

router.get("/calculadora/operacoes", ControllerCalculadora.Operacoes);
router.post("/calculadora/soma", ControllerCalculadora.Soma);
router.post("/calculadora/sub", ControllerCalculadora.Sub);
router.post("/calculadora/mult", ControllerCalculadora.Mult);
router.post("/calculadora/div", ControllerCalculadora.Div);
router.post("/calculadora/pot", ControllerCalculadora.Pot);
router.post("/calculadora/raiz", ControllerCalculadora.Raiz);

module.exports = router;