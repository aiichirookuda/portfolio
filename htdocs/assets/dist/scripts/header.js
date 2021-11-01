'use strict';

var $header = document.querySelector('.js-header');
var $nav = document.querySelectorAll('.p-nav');
var $spNav = document.querySelector('.p-spNav');
window.addEventListener('scroll', function () {
  var $headerBottom = $nav[0].getBoundingClientRect().bottom;
  var $navBottom = $nav[1].getBoundingClientRect().bottom;

  if ($headerBottom > $navBottom) {
    $header.classList.add('is-show');
    $spNav.classList.add('is-show');
  } else {
    $header.classList.remove('is-show');
    $spNav.classList.add('is-show');
  }
});