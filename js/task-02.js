const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Отримуємо список ul#ingredients
const list = document.getElementById('ingredients');

// Створюємо масив елементів li
const items = [];

// Для кожного елемента масиву ingredients
ingredients.forEach(ingredient => {
  // Створюємо елемент li
  const item = document.createElement('li');
  // Додаємо назву інгредієнта як його текстовий вміст
  item.textContent = ingredient;
  // Додаємо елементу клас item
  item.classList.add('item');
  // Додаємо елемент li до масиву items
  items.push(item);
});

// Вставляємо усі елементи li за одну операцію у список ul#ingredients
list.append(...items);
console.log(list);
console.log(list.innerHTML);