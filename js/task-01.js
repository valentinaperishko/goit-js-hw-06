//Number of categories: 3

//Category: Animals
//Elements: 4

//Category: Products
//Elements: 3

//Category: Technologies
//Elements: 5

const categories = document.querySelector("#categories");

let message = `Number of categories: ${categories.children.length}`;
console.log(message);

[...categories.children].forEach((item) => {
  const numbers = item.querySelectorAll("li");
  message = `Category: ${item.children[0].textContent} \nElements: ${numbers.length}`;
  console.log(message);
});
