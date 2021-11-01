'use strict';

if (!navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
  document.querySelectorAll('.js-thumbnail').forEach(function (el) {
    el.addEventListener('mouseover', function () {
      el.children[0].classList.add('is-active');
      el.children[1].classList.add('is-active');
    });
    el.addEventListener('mouseout', function () {
      el.children[0].classList.remove('is-active');
      el.children[1].classList.remove('is-active');
    });
  });
}
