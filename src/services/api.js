class ServiceApi {
    Somar(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Informe um número')
        }
        return Number(num1) + Number(num2);
    }
}

// module.exports = ServiceApi -> const api = new ServiceApi()
module.exports = new ServiceApi()