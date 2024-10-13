const express = require('express');
const CalculatorController = require('../controllers/api');

const router = express.Router();

router.post('/calculate', CalculatorController.calculate);
router.get('/operations', CalculatorController.getOperations);

module.exports = router;
