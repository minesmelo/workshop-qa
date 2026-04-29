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
