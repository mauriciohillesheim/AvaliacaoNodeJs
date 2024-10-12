const ServiceApi = require('../services/api')

class ControllersApi {
    Somar(req,res) {
        //http://localhost:3000
        try{
            const resultado = ServiceApi.Somar(req.body.num1, req.body.num2);
            res.status(201).json({ resultadoPost: resultado })
            
        }catch (error) {
            console.error(error)
            res.status(400).send({resultado })
        }
    }
}

module.exports = new ControllersApi()