const ServiceCalculadora = require('./../services/calculadora')

class ControllerCalculadora {
    Operacoes(req, res) {
        try {
            const result = ServiceCalculadora.Operacoes();
            res.status(200).json({ result: result })
        } catch (e) {
            res.status(400).json({ msg: e.message })
        }
    }

    Soma(req, res) {
        try {
            const { num1, num2 } = req.body;

            const result = ServiceCalculadora.Soma(num1, num2);

            res.status(200).json({ result: result })
        } catch (e) {
            res.status(422).json({ msg: e.message })
        }
    }

    Sub(req, res) {
        try {
            const { num1, num2 } = req.body;

            const result = ServiceCalculadora.Sub(num1, num2);

            res.status(200).json({ result: result })
        } catch (e) {
            res.status(422).json({ msg: e.message })
        }
    }

    Mult(req, res) {
        try {
            const { num1, num2 } = req.body;

            const result = ServiceCalculadora.Mult(num1, num2);

            res.status(200).json({ result: result })
        } catch (e) {
            res.status(422).json({ msg: e.message })
        }
    }

    Div(req, res) {
        try {
            const { num1, num2 } = req.body;

            const result = ServiceCalculadora.Div(num1, num2);

            res.status(200).json({ result: result })
        } catch (e) {
            res.status(422).json({ msg: e.message })
        }
    }

    Pot(req, res) {
        try {
            const { base, expoente } = req.body;

            const result = ServiceCalculadora.Pot(base, expoente);

            res.status(200).json({ result: result })
        } catch (e) {
            res.status(422).json({ msg: e.message })
        }
    }

    Raiz(req, res) {
        try {
            const { num } = req.body;

            const result = ServiceCalculadora.Raiz(num);

            res.status(200).json({ result: result })
        } catch (e) {
            res.status(422).json({ msg: e.message })
        }
    }
}

module.exports = new ControllerCalculadora();