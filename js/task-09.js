const changeBtn = document.querySelector(".change-color");
const textColor = document.querySelector(".color");
const body = document.querySelector("body");

changeBtn.addEventListener("click", onClick);

function onClick() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  textColor.textContent = `${randomColor}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
