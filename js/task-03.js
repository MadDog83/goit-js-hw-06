const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// Отримуємо список ul.gallery
const gallery = document.querySelector('.gallery');

// Створюємо змінну для зберігання розмітки
let markup = '';

// Для кожного об'єкта в масиві images
images.forEach(image => {
  // Створюємо шаблонний рядок з елементами li і img
  const item = `<li><img src="${image.url}" alt="${image.alt}" width="640"></li>`;
  // Додаємо елемент li до розмітки
  markup += item;
});

// Вставляємо розмітку у список ul.gallery за одну операцію
gallery.insertAdjacentHTML('beforeend', markup);
