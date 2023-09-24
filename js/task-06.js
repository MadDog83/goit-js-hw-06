// Отримуємо посилання на елемент інпут
const input = document.getElementById("validation-input");
// Отримуємо значення атрибута data-length як число
const length = Number(input.dataset.length);

// Додаємо обробник події blur на інпут
input.addEventListener("blur", function() {
  // Отримуємо значення інпута і видаляємо зайві пробіли
  const value = input.value.trim();
  // Якщо довжина значення рівна очікуваній довжині
  if (value.length === length) {
    // Додаємо клас valid і видаляємо клас invalid
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
  console.log("Довжина значення інпута:", value.length);
});
