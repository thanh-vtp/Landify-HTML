'use strict';

const buttons = document.querySelectorAll('.home-menu [data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    const targetPage = this.getAttribute('data-nav-link');

    pages.forEach(page => {
      if (page.getAttribute('data-page') === targetPage) {
        page.classList.add('active');
      } else {
        page.classList.remove('active');
      }
    });

    buttons.forEach(btn => {
      btn.classList.remove('active');
    });

    this.classList.add('active');
  });
});
