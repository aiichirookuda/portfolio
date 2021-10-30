'use strict';
'use strict';

document.querySelectorAll('.js-thumbnail').forEach((el) => {
  el.addEventListener('mouseover', () => {
    el.children[0].classList.add('is-active');
    el.children[1].classList.add('is-active');
  });
  el.addEventListener('mouseout', () => {
    el.children[0].classList.remove('is-active');
    el.children[1].classList.remove('is-active');
  });
});
