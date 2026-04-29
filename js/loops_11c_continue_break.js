const arr = [10, 20, 30];

// continue — skip this iteration
for (let i = 0; i < arr.length; i++) {
  if (i === 1) continue; // Skips the iteration if condition is met
  console.log("continue:", i);
}

// break — exit the loop
for (let i = 0; i < arr.length; i++) {
  if (i === 1) break; // Stops the for loop if condition is met
  console.log("break:", i);
}
