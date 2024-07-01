'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

// const posY = ev.clientY - wall.clientHeight * 0.5;
// const posX = ev.clientX - wall.clientWidth * 0.5;

wall.addEventListener('click', (ev) => {
  // перевіряємо, чи клік відбувся саме на wall
  // а не на дочірньому елементі (наприклад)
  if (ev.currentTarget !== wall) {
    return;
  }

  // максимально можливі значення х та у

  const maximalX = wall.clientWidth - spider.clientWidth;
  const maximalY = wall.clientHeight - spider.clientHeight;

  // на скільки далеко має розміщуватись центр павука

  const centerX = ev.offsetX - spider.clientWidth / 2;
  const centerY = ev.offsetY - spider.clientHeight / 2;

  // максимальне значення для Х та У - 350 пх
  // фактичні координати і їх максимальне значення
  // з-поміж мінімальних (вибираються між фактичним розміщенням середини павука,
  // але так, щоб не перевищувало тих 350 пх)
  // мінімальне значення - 0 0 - верхній лівий кут
  // максимальне значення - 350 350 - нижній правий

  const spiderX = Math.max(0, Math.min(maximalX, centerX));
  const spiderY = Math.max(0, Math.min(maximalY, centerY));
  // встановлюємо left та top для павука

  spider.style.left = `${spiderX}px`;
  spider.style.top = `${spiderY}px`;
});
