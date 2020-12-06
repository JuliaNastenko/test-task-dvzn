'use strict';

const burger = document.getElementById('burger-menu');
const menu = document.getElementById('mob-menu');
const main = document.getElementById('main-section');

burger.addEventListener('click', () => {
  burger.classList.toggle('active-burger');
  menu.classList.toggle('active-menu');
  main.classList.toggle('is-blured');
});
