let j = 0;

// while — condition checked before each iteration (here the body never runs)
while (j < 0) {
  console.log("while:", "in while");
  j++;
}

// do...while — body runs once, then condition checked
do {
  console.log("do while:", "testing");
  j++;
} while (j < 0);
