"use strict";
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(divisor, dividend) {
    return dividend / divisor;
}
module.exports = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
};
