// Отримуємо посилання на елементи інпут і спан
const input = document.getElementById("font-size-control");
const text = document.getElementById("text");

// Додаємо обробник події input на інпут
input.addEventListener("input", function() {
  // Отримуємо значення інпута як число
  const size = Number(input.value);
  
  text.style.fontSize = size + "px";
});