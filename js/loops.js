const statement = true;

// If/Else statement
if (statement) {
  console.log("Im true");
} else {
  console.log("condition not met :( ");
}

const arr = [10, 20, 30];

// For in loop - iterates over the keys
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// For of loop - iterates over the value
for (const item of arr) {
  console.log(item);
}

const obj = {
  name: "test",
  value: 1,
};

// For in loop - iterates over the keys
for (const idx in obj) {
  console.log(idx);
}

// For loop - with continue
for (let i = 0; i < arr.length; i++) {
  if (i === 1) continue; // Skips the iteration if condition is met
  console.log(i);
}

// For loop - with break
for (let i = 0; i < arr.length; i++) {
  if (i === 1) break; // Stops the for loop if condition is met
  console.log(i);
}

// Switch case statement
const condition = "a";

switch (condition) {
  case "a":
    console.log("im a");
    break; // Break or return necessarity to stop code execution other wise it would execute from where the condition is met onwards
  case "b":
    console.log("im b");
    break;
  case "c":
    console.log("im c");
    break;
  default:
    console.log("default");
}

let j = 0;
// While loop - checks the condition and then executes
while (j < 0) {
  console.log("in while");
  j++;
}

// Do while loop - executes first and then checks the condition
do {
  console.log("testing");
  j++;
} while (j < 0);
