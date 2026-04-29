// Function call before definition will work because of hoisting
console.log("sum(1, 1):", sum(1, 1));

// Function
function sum(a, b) {
  return a + b;
}

// Arrow function with a block body + explicit return
const sumValuesToStore = (a, b) => {
  return a + b;
};

// Arrow function with implicit return
const multiply = (a, b) => a * b;

// Arrow function with implicit return
const createObject = (a, b) => ({ a, b });

console.log("sumValuesToStore(3, 3):", sumValuesToStore(3, 3));
console.log("sumValuesToStore(1, 1):", sumValuesToStore(1, 1));
console.log("multiply(3, 3):", multiply(3, 3));
console.log("createObject(3, 3):", createObject(3, 3));

// Arrow function call before definition will throw an error because arrow functions are not hoisted
console.log("divide(3, 3):", divide(3, 3));

const divide = (a, b) => {return a / b;};

// Use functions or arrow functions depending on the project style and use case.
// Differences like hoisting and `this` can affect readability and behavior.
