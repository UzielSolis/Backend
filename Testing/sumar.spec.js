const sumar = require('./sumar');

describe('modulo sumar', () => {
    test('suma dos enteros positivos', () => {
        const resultado = sumar(4, 2);
        expect(resultado).toBe(6);
    });
});