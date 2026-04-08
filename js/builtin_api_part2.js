const response = { status: "200", ok: true, message: 'Saved' };

const keys = Object.keys(response);
const values = Object.values(response);
const entries = Object.entries(response);

console.log("number conversion", Number(response.status));
console.log('keys', keys);
console.log('values', values);
console.log('entries', entries);

