
// Отримуємо посилання на елементи інпут і спан
const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

// Додаємо обробник події input на інпут
input.addEventListener("input", function() {
  // Отримуємо значення інпута і видаляємо зайві пробіли
  const name = input.value.trim();
  // Якщо інпут порожній, встановлюємо значення спана в "Anonymous"
  if (name === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = name;
  }
});