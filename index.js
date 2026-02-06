// A simple calculator program
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

console.log("Calculator App Started");
console.log("5 + 3 =", add(5, 3));

module.exports = { add, subtract };
