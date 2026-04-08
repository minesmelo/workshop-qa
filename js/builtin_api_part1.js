const rounded = Math.round(4.6);
const iso = new Date().toISOString();

const line = 'something error happened';
const foundError = /Error/i.test(line);

const raw = 'USER:MARIA';
const name = raw.split(':');

console.log('rounded', rounded);
console.log('iso', iso);
console.log('foundError', foundError);
console.log('name', name);
