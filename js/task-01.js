const categories = document.querySelector("#categories");

let message = `Number of categories: ${categories.children.length}`;
console.log(message);

[...categories.children].forEach((item) => {
  const numbers = item.querySelectorAll("li");
  message = `Category: ${item.children[0].textContent} \nElements: ${numbers.length}`;
  console.log(message);
});
