'use strict';

const $btn = document.querySelector('.js-menu');
const $spNav = document.querySelector('.p-spNav');
const $navItem = document.querySelectorAll('.c-navLink--purple');
const $trigger = Array.from($navItem);
$trigger.push($btn);

const noScroll = (e) => {
  e.preventDefault();
};

$trigger.forEach((el) => {
  el.addEventListener('click', () => {
    if (!$btn.classList.contains('is-active')) {
      $btn.classList.add('is-active');
      $spNav.classList.add('is-active');

      // スクロール禁止(SP)
      document.addEventListener('touchmove', noScroll, { passive: false });
      // スクロール禁止(PC)
      document.addEventListener('mousewheel', noScroll, { passive: false });
    } else {
      $btn.classList.remove('is-active');
      $spNav.classList.remove('is-active');

      // スクロール禁止を解除(SP)
      document.removeEventListener('touchmove', noScroll, { passive: false });
      // スクロール禁止を解除(PC)
      document.removeEventListener('mousewheel', noScroll, { passive: false });
    }
  });
});
