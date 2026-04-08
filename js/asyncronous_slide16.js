const URL = "https://dummyjson.com/recipes";
let loading = true;

const getRecipes = () => {
  const toThrow = Math.round(Math.random() * 10) < 5 ? true : false;
  console.log(toThrow);
  return fetch(URL).then((res) => {
    if (toThrow) throw new Error("Api Call failed");
    return res.json();
  });
};

await getRecipes()
  .then((res) => {
    loading = true;
    console.log(res.recipes[0]);
  })
  .catch((e) => console.log(e.message))
  .finally(() => {
    loading = false;
    console.log("clear loading state");
  });
