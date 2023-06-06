function add(a: number, b: number): number {
    return a + b;
}

function subtract(a: number, b: number): number {
    return a - b;
}

function multiply(a: number, b: number): number {
    return a * b;
}

function divide(divisor: number, dividend: number ): number {
    return dividend/divisor;
}

module.exports = {
    add,
    subtract,
    multiply,
    divide
}