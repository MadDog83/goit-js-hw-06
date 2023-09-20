// Отримуємо елементи кнопок і спану
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector('#value');

// Створюємо змінну counterValue, в якій буде зберігатися поточне значення лічильника
let counterValue = 0;

// Додаємо слухача кліку до кнопки decrementBtn
decrementBtn.addEventListener('click', () => {
  // Зменшуємо значення counterValue на одиницю
  counterValue -= 1;
  // Оновлюємо текстовий вміст спану valueSpan
  valueSpan.textContent = counterValue;
});

// Додаємо слухача кліку до кнопки incrementBtn
incrementBtn.addEventListener('click', () => {
  // Збільшуємо значення counterValue на одиницю
  counterValue += 1;
  // Оновлюємо текстовий вміст спану valueSpan
  valueSpan.textContent = counterValue;
});
