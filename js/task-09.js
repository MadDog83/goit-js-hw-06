
// Отримуємо посилання на елементи кнопки, спана і body
const button = document.querySelector(".change-color");
const span = document.querySelector(".color");
const body = document.body;

// Додаємо обробник події click на кнопку
button.addEventListener("click", function() {
  // Викликаємо функцію getRandomHexColor і отримуємо випадковий колір
  const color = getRandomHexColor();
  // Встановлюємо властивість backgroundColor body в значення кольору
  body.style.backgroundColor = color;
  // Встановлюємо текстовий вміст спана в значення кольору
  span.textContent = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
