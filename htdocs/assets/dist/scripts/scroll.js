'use strict';

window.addEventListener('DOMContentLoaded', function () {
  var anchorLinks = document.querySelectorAll('a[href^="#"]');
  var anchorLinksArr = Array.prototype.slice.call(anchorLinks);
  anchorLinksArr.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var targetId = link.hash;
      var targetElement = document.querySelector(targetId);
      var headerHight = document.querySelector('.l-header__inner').clientHeight;
      var targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top;
      window.scrollTo({
        top: targetOffsetTop - headerHight,
        behavior: 'smooth'
      });
    });
  });
});