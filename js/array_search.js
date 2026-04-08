const users = [
  { id: 1, active: true },
  { id: 2, active: false },
  { id: 3, active: true },
];

console.log('find →', users.find((u) => !u.active));
console.log('findIndex →', users.findIndex((u) => u.id === 3));
console.log('some →', users.some((u) => !u.active));
console.log('every →', users.every((u) => !u.active));
