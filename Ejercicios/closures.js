const sumar = (a) => (b) => a + b;

/**
function sumar(a) {
    return function(b) {
        return a + b;
    };
};
*/

const sumaCon5 = sumar(5);
const r1 = sumaCon5(3);  // 8
const r2 = sumaCon5(2);  // 7

console.log(r2);
console.log(r1);