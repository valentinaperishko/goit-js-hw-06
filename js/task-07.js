const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

function onInput() {
  text.style.fontSize = `${input.value}px`;
}

input.addEventListener("input", onInput);
