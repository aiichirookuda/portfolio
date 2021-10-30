'use strict';

const $header = document.querySelector('.js-header');
const $nav = document.querySelectorAll('.p-nav');

window.addEventListener('scroll', () => {
  const $headerBottom = $nav[0].getBoundingClientRect().bottom;
  const $navBottom = $nav[1].getBoundingClientRect().bottom;

  if ($headerBottom > $navBottom) {
    $header.classList.add('is-show');
  } else {
    $header.classList.remove('is-show');
  }
});
