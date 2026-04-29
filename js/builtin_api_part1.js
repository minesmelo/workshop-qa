// Math — round to nearest integer (4.6 → 5)
const rounded = Math.round(4.6);

// Date — current instant as an ISO 8601 UTC string (e.g. "2026-04-27T18:30:00.000Z")
const iso = new Date().toISOString();

// RegExp — /pattern/flags; .test(str) returns true if str matches (here: "Error" anywhere, case-insensitive)
const line = 'something error happened';
const foundError = /Error/i.test(line);

// String — split breaks on a delimiter and returns an array of parts
const raw = 'USER:MARIA';
const name = raw.split(':');

console.log('rounded', rounded);
console.log('iso', iso);
console.log('foundError', foundError);
console.log('name', name);
