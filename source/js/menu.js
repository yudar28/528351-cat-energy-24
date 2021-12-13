let navButton = document.querySelector('.page-header__toggle');
let navMain = document.querySelector('.main-nav');

navButton.classList.remove('page-header__toggle--nojs');
navMain.classList.remove('main-nav--nojs');

navButton.addEventListener('click', function() {
  navMain.classList.toggle('main-nav--open');
  navButton.classList.toggle('page-header__toggle--close');
})

