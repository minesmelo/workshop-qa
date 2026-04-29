// Function call before definition will work because of hoisting
console.log("sum(1, 1):", sum(1, 1));

function sum(a, b) {
  return a + b;
}
