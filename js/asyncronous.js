const URL = 'https://dummyjson.com/recipes';
let loading = true;

function example() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

const getRecipes = () => {
  const toThrow = Math.round(Math.random() * 10) < 5 ? true : false;
  console.log(toThrow);
  return fetch(URL).then((res) => {
    if (toThrow) throw new Error('Api Call failed');
    return res.json();
  });
};

// Try-catch-Finally
try {
  loading = true;
  const recipes = await getRecipes();
  console.log(recipes.recipes[0]);
} catch (e) {
  console.log(e.message);
} finally {
  loading = false;
  console.log('clear loading state');
}

// Promises
await getRecipes()
  .then((res) => {
    loading = true;
    console.log(res.recipes[0]);
  })
  .catch((e) => console.log(e.message))
  .finally(() => {
    loading = false;
    console.log('clear loading state');
  });

// Async/Await vs Promises
console.log('After Promise');

async function asyncCalling() {
  await example();
  console.log('await: wait for me');
  console.log('After async await');
}

await asyncCalling();
