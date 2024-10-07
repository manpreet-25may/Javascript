let a = 10;
let b = 12;
let c;
debugger;
function sum() {
    c = a + b;
    return c;
}
function multiply() {
    c = a * b;
    return c;
}
function modulus() {
    c = a % b;
    return c;
}
let add = sum();
let mul = multiply();
let mod = modulus();
alert(add);
alert(mul);
alert(mod);
