const input = document.querySelector("#validation-input");

function onBlur() {
  const dataLength = input.value.trim().length;
  const inputLength = Number(input.dataset.length);
  if (dataLength === inputLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}

input.addEventListener("blur", onBlur);
