class ServiceCalculadora {
    Operacoes() {
        const result = {
            Operacoes: {
                Soma: "Soma dois números endpoint = /calculadora/soma",
                Subtrai: "Subtrai dois números endpoint = /calculadora/sub",
                Multiplica: "Multiplica dois números endpoint = /calculadora/mult",
                Divide: "Divide dois números endpoint = /calculadora/div",
                Potencia: "Exibe a potência de um número endpoint = /calculadora/pot",
                Raiz: "Exibe a raiz quadrada de um número endpoint = /calculadora/pot"
            }
        }

        return result;
    }

    Soma(num1, num2){
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Insira um número válido!');
        }

        return Number(num1) + Number(num2);
    }

    Sub(num1, num2){
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Insira um número válido!');
        }

        return Number(num1) - Number(num2);
    }

    Mult(num1, num2){
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Insira um número válido!');
        }

        return Number(num1) * Number(num2);
    }

    Div(num1, num2){
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error('Insira um número válido!');
        }

        return Number(num1) / Number(num2);
    }

    Pot(base, expoente){
        if (isNaN(base) || isNaN(expoente)) {
            throw new Error('Insira um número válido!');
        }

        return Math.pow(base, expoente);
    }

    Raiz(num){
        if (isNaN(num) || num < 0) {
            throw new Error('Insira um número válido!');
        }

        return Math.sqrt(num);
    }
}

module.exports = new ServiceCalculadora();