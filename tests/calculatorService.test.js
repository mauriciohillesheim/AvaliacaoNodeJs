const CalculatorService = require('../src/services/api');

describe('CalculatorService', () => {
    test('soma de 1 e 2 deve ser 3', () => {
        expect(CalculatorService.add(1, 2)).toBe(3);
    });

    test('subtração de 5 e 2 deve ser 3', () => {
        expect(CalculatorService.subtract(5, 2)).toBe(3);
    });

    test('multiplicação de 3 e 4 deve ser 12', () => {
        expect(CalculatorService.multiply(3, 4)).toBe(12);
    });

    test('divisão de 8 por 2 deve ser 4', () => {
        expect(CalculatorService.divide(8, 2)).toBe(4);
    });

    test('potência de 2 elevado a 3 deve ser 8', () => {
        expect(CalculatorService.power(2, 3)).toBe(8);
    });

    test('raiz quadrada de 9 deve ser 3', () => {
        expect(CalculatorService.squareRoot(9)).toBe(3);
    });

    test('raiz quadrada de número negativo deve lançar erro', () => {
        expect(() => CalculatorService.squareRoot(-9)).toThrow('Raiz quadrada de número negativo!');
    });
});

