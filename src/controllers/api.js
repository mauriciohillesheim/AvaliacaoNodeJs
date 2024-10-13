const CalculatorService = require('../services/api');

class CalculatorController {
    static calculate(req, res) {
        const { operation, a, b } = req.body;

        try {
            let result;
            switch (operation) {
                case 'add':
                    result = CalculatorService.add(a, b);
                    break;
                case 'subtract':
                    result = CalculatorService.subtract(a, b);
                    break;
                case 'multiply':
                    result = CalculatorService.multiply(a, b);
                    break;
                case 'divide':
                    result = CalculatorService.divide(a, b);
                    break;
                case 'power':
                    result = CalculatorService.power(a, b);
                    break;
                case 'sqrt':
                    result = CalculatorService.squareRoot(a);
                    break;
                default:
                    return res.status(400).send('Operação inválida!');
            }
            res.json({ result });
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    static getOperations(req, res) {
        const operations = [
            'add', 
            'subtract', 
            'multiply', 
            'divide', 
            'power', 
            'sqrt'
        ];
        res.json({ operations });
    }
}

module.exports = CalculatorController;
