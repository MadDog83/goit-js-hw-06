
// Отримуємо посилання на елемент форми
const form = document.querySelector(".login-form");
// Додаємо обробник події submit на форму
form.addEventListener("submit", function(event) {
  // Запобігаємо перезавантаженню сторінки
  event.preventDefault();
  // Отримуємо об'єкт з елементами форми
  const elements = form.elements;
  // Отримуємо значення полів email і password
  const email = elements.email.value;
  const password = elements.password.value;
  // Якщо хоча б одне поле порожнє
  if (email === "" || password === "") {
    // Виводимо попередження про те, що всі поля повинні бути заповнені
    alert("Всі поля повинні бути заповнені!");
  } else {
    const data = {
      email: email,
      password: password,
    };
    console.log(data);
    form.reset();
  }
});
