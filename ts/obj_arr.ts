interface User {
  name: string;
  age: number;
  married: boolean;
}

// An object stores related information using keys and values
const obj: User = {
  name: 'Angel',
  age: 12,
  married: true,
};

// An array stores multiple values in order, accessed by index
const arr: number[] = [1, 2, 3];

obj.name = 'Dexter';
let poppy = arr.pop(); // Removes the last element and returns it

console.log(poppy);

console.log(obj);
console.log(arr);
