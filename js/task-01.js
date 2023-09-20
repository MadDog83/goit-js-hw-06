// Отримуємо список категорій
const categories = document.getElementById('categories');

// Отримуємо масив елементів li.item
const items = Array.from(categories.children);

// Виводимо кількість категорій
console.log(`Number of categories: ${items.length}`);

// Для кожного елемента li.item
items.forEach(item => {
  // Знаходимо заголовок h2 і його текст
  const title = item.firstElementChild.textContent;
  // Знаходимо список елементів li вкладених в item
  const elements = item.lastElementChild;
  // Знаходимо кількість елементів
  const count = elements.childElementCount;
  // Виводимо текст заголовка і кількість елементів
  console.log(`Category: ${title}`);
  console.log(`Elements: ${count}`);
});