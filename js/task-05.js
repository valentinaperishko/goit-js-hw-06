const input = document.querySelector("#name-input");
const text = document.querySelector("#name-output");

function onInput() {
  if (input.value.trim() === "") {
    text.textContent = "Anonymous";
  } else {
    text.textContent = input.value;
  }
}

input.addEventListener("input", onInput);
