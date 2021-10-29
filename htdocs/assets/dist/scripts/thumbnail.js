'use strict';
'use strict';

document.querySelectorAll('.js-thumbnail').forEach(function (el) {
  el.addEventListener('mouseover', function () {
    el.children[0].classList.add('is-active');
    console.log(el.children[0]);
    el.children[1].classList.add('is-active');
    console.log(el.children[1]);
  });
  el.addEventListener('mouseout', function () {
    el.children[0].classList.remove('is-active');
    el.children[1].classList.remove('is-active');
  });
});