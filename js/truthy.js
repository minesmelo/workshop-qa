// Truthy — values that convert to true in a boolean context
console.log(Boolean(true));
console.log(Boolean(' '));
console.log(Boolean(2));
console.log(Boolean(-1));
console.log(Boolean([]));
console.log(Boolean({}));

// Guard: length is fine; a numeric 0 is valid but falsy
const items = ['a', 'b'];
if (items.length) {
  console.log('OK: items.length is truthy when the array is non-empty');
}

const price = 0; // valid value (e.g. free item)
if (price) {
  console.log('this line does not run');
} else {
  console.log(
    'Caution: price 0 is falsy — use an explicit check (e.g. typeof price === "number")'
  );
}
