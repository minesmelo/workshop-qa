// Truty
console.log(Boolean(true));
console.log(Boolean(' '));
console.log(Boolean(2));
console.log(Boolean(-1));
console.log(Boolean([]));
console.log(Boolean({}));

// Falsy
console.log(Boolean(false));
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));

// LOOSE Comparison == compares the value but it doesn't check the type; Type coercion is done to check both values in most of the case the conversation is made to Boolean

console.log(10 == '10'); // Number('10') equals 10
console.log(true == 1); // Number(true) equals 1
console.log(false == 0); // Number(false) equals to 0
console.log('' == 0); // Number('') equals to 0

/** Exception */
console.log(null == undefined); // Special rule between this comparision which return true

// STRICT Comparison === compares both the value has the type
console.log(10 === '10'); // false
console.log(true === 1); // false
console.log(false === 0); // false
console.log('' === 0); // false
console.log(1 === 1); // true
console.log('true' === 'true'); // true

// BEWARE case with ===
console.log({} === {}); // Reference in memory is different between both objects
console.log([] === []); // Reference in memory is different between both objects
console.log(NaN === NaN); // NaN is consider a unique value, therefor this comparision is always false

const obj1 = {};
const obj2 = obj1;
console.log(obj1 === obj2); // Since they point to the same place in memory this expression is true
