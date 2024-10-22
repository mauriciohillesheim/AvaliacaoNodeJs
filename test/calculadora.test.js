const ServiceCalculadora = require('./../src/services/calculadora');
const { describe, it, expect } = require('@jest/globals');

describe("Testando o GET que retorna as operações possíveis: ", () => {
    it('Retorna o GET', () => {
        const result = ServiceCalculadora.Operacoes();

        expect(result).toStrictEqual({
            Operacoes: {
                Soma: "Soma dois números endpoint = /calculadora/soma",
                Subtrai: "Subtrai dois números endpoint = /calculadora/sub",
                Multiplica: "Multiplica dois números endpoint = /calculadora/mult",
                Divide: "Divide dois números endpoint = /calculadora/div",
                Potencia: "Exibe a potência de um número endpoint = /calculadora/pot",
                Raiz: "Exibe a raiz quadrada de um número endpoint = /calculadora/pot"
            }
        })
    })
})

describe("Testando a operação de soma: ", () => {
    it("Efetua a operação recebendo dois números positivos", () => {
        const result = ServiceCalculadora.Soma(2, 2);

        expect(result).toBe(4);
    })

    it("Efetua a operação recebendo dois números negativos", () => {
        const result = ServiceCalculadora.Soma(-2, -2);

        expect(result).toBe(-4);
    })

    it("Efetua a operação recebendo um número negativo e um positivo", () => {
        const result = ServiceCalculadora.Soma(-2, 2);

        expect(result).toBe(0);
    })

    it("Efetua a operação recebendo um número positivo e um negativo", () => {
        const result = ServiceCalculadora.Soma(2, -2);

        expect(result).toBe(0);
    })

    it("Efetua a operação recebendo duas letras", () => {
        const result = () => ServiceCalculadora.Soma("a", "a");

        expect(result).toThrow('Insira um número válido!');
    })

    it("Efetua a operação recebendo um número positivo e uma letra", () => {
        const result = () => ServiceCalculadora.Soma(2, "a");

        expect(result).toThrow('Insira um número válido!');
    })

    it("Efetua a operação recebendo uma letra e um número positivo", () => {
        const result = () => ServiceCalculadora.Soma("a", 2);

        expect(result).toThrow('Insira um número válido!');
    })

    it("Efetua a operação recebendo um número negativo e uma letra", () => {
        const result = () => ServiceCalculadora.Soma(-2, "a");

        expect(result).toThrow('Insira um número válido!');
    })

    it("Efetua a operação recebendo uma letra e um número negativo", () => {
        const result = () => ServiceCalculadora.Soma("a", -2);

        expect(result).toThrow('Insira um número válido!');
    })

    it("Efetua a operação recebendo dois números decimais negativos", () => {
        const result = ServiceCalculadora.Soma(-2.50, -2.50);

        expect(result).toBe(-5);
    })

    it("Efetua a operação recebendo dois números decimais positivos", () => {
        const result = ServiceCalculadora.Soma(2.50, 2.50);

        expect(result).toBe(5);
    })

    it("Efetua a operação recebendo um número decimal positivo e outro negativo", () => {
        const result = ServiceCalculadora.Soma(2.50, -2.50);

        expect(result).toBe(0);
    })

    it("Efetua a operação recebendo um número decimal positivo e outro negativo", () => {
        const result = ServiceCalculadora.Soma(-2.50, 2.50);

        expect(result).toBe(0);
    })

    it("Efetua a operação recebendo um número decimal positivo e uma letra", () => {
        const result = () => ServiceCalculadora.Soma(2.50, "a");

        expect(result).toThrow('Insira um número válido!');
    })
})

describe("Testando a operação de subtração: ", () => {
    it("Efetua a operação recebendo dois números positivos", () => {
        const result = ServiceCalculadora.Sub(2, 2);

        expect(result).toBe(0);
    })

    it("Efetua a operação recebendo dois números negativos", () => {
        const result = ServiceCalculadora.Sub(-2, -2);

        expect(result).toBe(0);
    })

    it("Efetua a operação recebendo um número negativo e um positivo", () => {
        const result = ServiceCalculadora.Sub(-2, 2);

        expect(result).toBe(-4);
    })

    it("Efetua a operação recebendo um número positivo e um negativo", () => {
        const result = ServiceCalculadora.Sub(2, -2);

        expect(result).toBe(4);
    })

    it("Efetua a operação recebendo duas letras", () => {
        const result = () => ServiceCalculadora.Sub("a", "a");

        expect(result).toThrow('Insira um número válido!');
    })

    it("Efetua a operação recebendo um número positivo e uma letra", () => {
        const result = () => ServiceCalculadora.Sub(2, "a");

        expect(result).toThrow('Insira um número válido!');
    })

    it("Efetua a operação recebendo uma letra e um número positivo", () => {
        const result = () => ServiceCalculadora.Sub("a", 2);

        expect(result).toThrow('Insira um número válido!');
    })

    it("Efetua a operação recebendo um número negativo e uma letra", () => {
        const result = () => ServiceCalculadora.Sub(-2, "a");

        expect(result).toThrow('Insira um número válido!');
    })

    it("Efetua a operação recebendo uma letra e um número negativo", () => {
        const result = () => ServiceCalculadora.Sub("a", -2);

        expect(result).toThrow('Insira um número válido!');
    })

    it("Efetua a operação recebendo dois números decimais negativos", () => {
        const result = ServiceCalculadora.Sub(-2.50, -2.50);

        expect(result).toBe(0);
    })

    it("Efetua a operação recebendo dois números decimais positivos", () => {
        const result = ServiceCalculadora.Sub(2.50, 2.50);

        expect(result).toBe(0);
    })

    it("Efetua a operação recebendo um número decimal positivo e outro negativo", () => {
        const result = ServiceCalculadora.Sub(2.50, -2.50);

        expect(result).toBe(5);
    })

    it("Efetua a operação recebendo um número decimal positivo e outro negativo", () => {
        const result = ServiceCalculadora.Sub(-2.50, 2.50);

        expect(result).toBe(-5);
    })

    it("Efetua a operação recebendo um número decimal positivo e uma letra", () => {
        const result = () => ServiceCalculadora.Sub(2.50, "a");

        expect(result).toThrow('Insira um número válido!');
    })

    it("Efetua a operação recebendo uma letra e um número decimal positivo", () => {
        const result = () => ServiceCalculadora.Sub("a", 2.50);

        expect(result).toThrow('Insira um número válido!');
    })
})

describe("Testando a operação de multiplicação: ", () => {
    it("Efetua a operação recebendo dois números positivos", () => {
        const result = ServiceCalculadora.Mult(2, 2);

        expect(result).toBe(4);
    })

    it("Efetua a operação recebendo dois números negativos", () => {
        const result = ServiceCalculadora.Mult(-2, -2);

        expect(result).toBe(4);
    })

    it("Efetua a operação recebendo um número negativo e um positivo", () => {
        const result = ServiceCalculadora.Mult(-2, 2);

        expect(result).toBe(-4);
    })

    it("Efetua a operação recebendo um número positivo e um negativo", () => {
        const result = ServiceCalculadora.Mult(2, -2);

        expect(result).toBe(-4);
    })

    it("Efetua a operação recebendo duas letras", () => {
        const result = () => ServiceCalculadora.Mult("a", "a");

        expect(result).toThrow('Insira um número válido!');
    })

    it("Efetua a operação recebendo um número positivo e uma letra", () => {
        const result = () => ServiceCalculadora.Mult(2, "a");

        expect(result).toThrow('Insira um número válido!');
    })

    it("Efetua a operação recebendo uma letra e um número positivo", () => {
        const result = () => ServiceCalculadora.Mult("a", 2);

        expect(result).toThrow('Insira um número válido!');
    })

    it("Efetua a operação recebendo um número negativo e uma letra", () => {
        const result = () => ServiceCalculadora.Mult(-2, "a");

        expect(result).toThrow('Insira um número válido!');
    })

    it("Efetua a operação recebendo uma letra e um número negativo", () => {
        const result = () => ServiceCalculadora.Mult("a", -2);

        expect(result).toThrow('Insira um número válido!');
    })

    it("Efetua a operação recebendo dois números decimais negativos", () => {
        const result = ServiceCalculadora.Mult(-2.50, -2.50);

        expect(result).toBe(6.25);
    })

    it("Efetua a operação recebendo dois números decimais positivos", () => {
        const result = ServiceCalculadora.Mult(2.50, 2.50);

        expect(result).toBe(6.25);
    })

    it("Efetua a operação recebendo um número decimal positivo e outro negativo", () => {
        const result = ServiceCalculadora.Mult(2.50, -2.50);

        expect(result).toBe(-6.25);
    })

    it("Efetua a operação recebendo um número decimal positivo e outro negativo", () => {
        const result = ServiceCalculadora.Mult(-2.50, 2.50);

        expect(result).toBe(-6.25);
    })

    it("Efetua a operação recebendo um número decimal positivo e uma letra", () => {
        const result = () => ServiceCalculadora.Mult(2.50, "a");

        expect(result).toThrow('Insira um número válido!');
    })

    it("Efetua a operação recebendo uma letra e um número decimal positivo", () => {
        const result = () => ServiceCalculadora.Mult("a", 2.50);

        expect(result).toThrow('Insira um número válido!');
    })
})

describe("Testando a operação de divisão: ", () => {
    it("Efetua a operação recebendo dois números positivos", () => {
        const result = ServiceCalculadora.Div(2, 2);

        expect(result).toBe(1);
    })

    it("Efetua a operação recebendo dois números negativos", () => {
        const result = ServiceCalculadora.Div(-2, -2);

        expect(result).toBe(1);
    })

    it("Efetua a operação recebendo um número negativo e um positivo", () => {
        const result = ServiceCalculadora.Div(-2, 2);

        expect(result).toBe(-1);
    })

    it("Efetua a operação recebendo um número positivo e um negativo", () => {
        const result = ServiceCalculadora.Div(2, -2);

        expect(result).toBe(-1);
    })

    it("Efetua a operação recebendo duas letras", () => {
        const result = () => ServiceCalculadora.Div("a", "a");

        expect(result).toThrow('Insira um número válido!');
    })

    it("Efetua a operação recebendo um número positivo e uma letra", () => {
        const result = () => ServiceCalculadora.Div(2, "a");

        expect(result).toThrow('Insira um número válido!');
    })

    it("Efetua a operação recebendo uma letra e um número positivo", () => {
        const result = () => ServiceCalculadora.Div("a", 2);

        expect(result).toThrow('Insira um número válido!');
    })

    it("Efetua a operação recebendo um número negativo e uma letra", () => {
        const result = () => ServiceCalculadora.Div(-2, "a");

        expect(result).toThrow('Insira um número válido!');
    })

    it("Efetua a operação recebendo uma letra e um número negativo", () => {
        const result = () => ServiceCalculadora.Div("a", -2);

        expect(result).toThrow('Insira um número válido!');
    })

    it("Efetua a operação recebendo dois números decimais negativos", () => {
        const result = ServiceCalculadora.Div(-2.50, -2.50);

        expect(result).toBe(1);
    })

    it("Efetua a operação recebendo dois números decimais positivos", () => {
        const result = ServiceCalculadora.Div(2.50, 2.50);

        expect(result).toBe(1);
    })

    it("Efetua a operação recebendo um número decimal positivo e outro negativo", () => {
        const result = ServiceCalculadora.Div(2.50, -2.50);

        expect(result).toBe(-1);
    })

    it("Efetua a operação recebendo um número decimal positivo e outro negativo", () => {
        const result = ServiceCalculadora.Div(-2.50, 2.50);

        expect(result).toBe(-1);
    })

    it("Efetua a operação recebendo um número decimal positivo e uma letra", () => {
        const result = () => ServiceCalculadora.Div(2.50, "a");

        expect(result).toThrow('Insira um número válido!');
    })

    it("Efetua a operação recebendo uma letra e um número decimal positivo", () => {
        const result = () => ServiceCalculadora.Div("a", 2.50);

        expect(result).toThrow('Insira um número válido!');
    })
})

describe("Testando a operação de potência: ", () => {
    it("Efetua a operação recebendo dois números positivos", () => {
        const result = ServiceCalculadora.Pot(2, 2);

        expect(result).toBe(4);
    })

    it("Efetua a operação recebendo dois números negativos", () => {
        const result = ServiceCalculadora.Pot(-2, -2);

        expect(result).toBe(0.25);
    })

    it("Efetua a operação recebendo um número negativo e um positivo", () => {
        const result = ServiceCalculadora.Pot(-2, 2);

        expect(result).toBe(4);
    })

    it("Efetua a operação recebendo um número positivo e um negativo", () => {
        const result = ServiceCalculadora.Pot(2, -2);

        expect(result).toBe(0.25);
    })

    it("Efetua a operação recebendo duas letras", () => {
        const result = () => ServiceCalculadora.Pot("a", "a");

        expect(result).toThrow('Insira um número válido!');
    })

    it("Efetua a operação recebendo um número positivo e uma letra", () => {
        const result = () => ServiceCalculadora.Pot(2, "a");

        expect(result).toThrow('Insira um número válido!');
    })

    it("Efetua a operação recebendo uma letra e um número positivo", () => {
        const result = () => ServiceCalculadora.Pot("a", 2);

        expect(result).toThrow('Insira um número válido!');
    })

    it("Efetua a operação recebendo um número negativo e uma letra", () => {
        const result = () => ServiceCalculadora.Pot(-2, "a");

        expect(result).toThrow('Insira um número válido!');
    })

    it("Efetua a operação recebendo uma letra e um número negativo", () => {
        const result = () => ServiceCalculadora.Pot("a", -2);

        expect(result).toThrow('Insira um número válido!');
    })

    it("Efetua a operação recebendo dois números decimais negativos", () => {
        const result = ServiceCalculadora.Pot(-2.50, -2.50);

        expect(result).toBe(NaN);
    })

    it("Efetua a operação recebendo dois números decimais positivos", () => {
        const result = ServiceCalculadora.Pot(2.50, 2.50);

        expect(result).toBe(9.882117688026185);
    })

    it("Efetua a operação recebendo um número decimal positivo e outro negativo", () => {
        const result = ServiceCalculadora.Pot(2.50, -2.50);

        expect(result).toBe(0.10119288512538814);
    })

    it("Efetua a operação recebendo um número decimal positivo e outro negativo", () => {
        const result = ServiceCalculadora.Pot(-2.50, 2.50);

        expect(result).toBe(NaN);
    })

    it("Efetua a operação recebendo um número decimal positivo e uma letra", () => {
        const result = () => ServiceCalculadora.Pot(2.50, "a");

        expect(result).toThrow('Insira um número válido!');
    })

    it("Efetua a operação recebendo uma letra e um número decimal positivo", () => {
        const result = () => ServiceCalculadora.Pot("a", 2.50);

        expect(result).toThrow('Insira um número válido!');
    })
})

describe("Testando a operação de Raiz: ", () => {
    it("Efetua a operação recebendo valor positivo", () => {
        const result = ServiceCalculadora.Raiz(4);

        expect(result).toBe(2);
    })

    it("Efetua a operação recebendo valor negativo", () => {
        const result = () => ServiceCalculadora.Raiz(-4);

        expect(result).toThrow('Insira um número válido!');
    })

    it("Efetua a operação recebendo uma letra", () => {
        const result = () => ServiceCalculadora.Raiz("a");

        expect(result).toThrow('Insira um número válido!');
    })

    it("Efetua a operação recebendo um valor ímpar", () => {
        const result = ServiceCalculadora.Raiz(3);

        expect(result).toBe(1.7320508075688772);
    })

    it("Efetua a operação recebendo um zero", () => {
        const result = ServiceCalculadora.Raiz(0);

        expect(result).toBe(0);
    })
})