// Falsy — these convert to false in a boolean context
console.log(Boolean(false));
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// A value can "exist" but still be falsy (e.g. empty string)
const label = '';
if (label) {
  console.log('non-empty label');
} else {
  console.log('empty string is falsy — check length or compare to "" if needed');
}
