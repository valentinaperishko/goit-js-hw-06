const boxWrapper = document.querySelector("#boxes");
const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  let amount = input.value;
  let sizeDefault = 30;
  let divEl = "";

  for (let i = 0; i < amount; i += 1) {
    let boxSizes = sizeDefault + i * 10;
    divEl += `<div class="box" style="width:${boxSizes}px;height:${boxSizes}px;background:${getRandomHexColor()};"></div>`;
  }
  boxWrapper.insertAdjacentHTML("afterbegin", divEl);
}

function destroyBoxes() {
  boxWrapper.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
