// Arrow function call before definition will throw — arrow functions are not hoisted
console.log("divide(3, 3):", divide(3, 3));

const divide = (a, b) => {
  return a / b;
};
