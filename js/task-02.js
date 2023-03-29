const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const items = ingredients.map((item) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = item;
  ingredientItem.classList.add("item");
  return ingredientItem;
});
ingredientsList.append(...items);
