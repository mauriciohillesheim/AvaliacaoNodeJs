class CalculatorService {
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static divide(a, b) {
        if (b === 0) throw new Error('Divisão por zero!');
        return a / b;
    }

    static power(a, b) {
        return Math.pow(a, b);
    }

    static squareRoot(a) {
        if (a < 0) throw new Error('Raiz quadrada de número negativo!');
        return Math.sqrt(a);
    }
}

module.exports = CalculatorService;
