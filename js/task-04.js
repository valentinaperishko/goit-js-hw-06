const incrementButton = document.querySelector("[data-action='increment']");
const decrementButton = document.querySelector("[data-action='decrement']");
const counter = document.querySelector("#value");

let counterValue = 0;

function onClick(evt) {
  if (incrementButton === evt.currentTarget) {
    const count = (counterValue += 1);
    counter.textContent = count;
  } else if (decrementButton === evt.currentTarget) {
    const count = (counterValue -= 1);
    counter.textContent = count;
  }
}

incrementButton.addEventListener("click", onClick);
decrementButton.addEventListener("click", onClick);
