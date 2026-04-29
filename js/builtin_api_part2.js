// Sample object (e.g. parsed JSON or API payload)
const response = { status: "200", ok: true, message: 'Saved' };

// Object — keys / values / entries as arrays (entries = [key, value] pairs)
const keys = Object.keys(response);
const values = Object.values(response);
const entries = Object.entries(response);

// Number — coerce a string to a number (here: status "200" → 200)
console.log("number conversion", Number(response.status));
console.log('keys', keys);
console.log('values', values);
console.log('entries', entries);
