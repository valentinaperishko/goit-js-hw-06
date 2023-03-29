//Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

//<div id="counter">
//<button type="button" data-action="decrement">-1</button>
//<span id="value">0</span>
//<button type="button" data-action="increment">+1</button>
//</div>

//Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
//Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
//Оновлюй інтерфейс новим значенням змінної counterValue.

const incrementButton = document.querySelector("[data-action='increment']");
const decrementButton = document.querySelector("[data-action='decrement']");
const counter = document.querySelector("#value");

let counterValue = 0;

function onClick(evt) {
  if (incrementButton === evt.currentTarget) {
    // console.log((counterValue += 1));
    const count = (counterValue += 1);
    counter.textContent = count;
  } else if (decrementButton === evt.currentTarget) {
    const count = (counterValue -= 1);
    counter.textContent = count;
    // console.log((counterValue -= 1));
  }
}

incrementButton.addEventListener("click", onClick);
decrementButton.addEventListener("click", onClick);
