const arr = [10, 20, 30];

// Classic for — index
for (let i = 0; i < arr.length; i++) {
  console.log("for:", arr[i]);
}

// for...of — values
for (const item of arr) {
  console.log("for of:", item);
}

const obj = {
  name: "test",
  value: 1,
};

// for...in — keys (objects; arrays too, but for-of is usually clearer for arrays)
for (const idx in obj) {
  console.log("for in:", idx);
}
