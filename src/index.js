import Storage from './js/storage.js';

import './js/bootstrap.bundle.min.js';
import './js/lightbox-plus-jquery.js';
import './scss/fontawesome.scss';
import './scss/bootstrap.scss';
import './scss/lightbox.min.scss';
import './scss/style.scss';

import { loadHomePage } from './js/home.js';
import { loadDetailPage, loadArticlePage } from './js/detail.js';
import handleCounter from './js/stats_counter.js';

// Handle Scroll ----------------
const navbar = document.querySelector('.navbar');
const scrollToTopBtn = document.querySelector('a.fixed-bottom');
const landscapeMediaObj = window.matchMedia(
  '(orientation:landscape) and (max-height: 600px)'
);

const userScroll = () => {
  // Handling Navbar and Scroll to top btn
  if (landscapeMediaObj.matches) {
    window.scrollY <= 800 && (scrollToTopBtn.style.display = 'none');

    window.scrollY > 800 &&
      (scrollToTopBtn.style.display = 'block') &&
      navbar.classList.remove(
        'opacity-90',
        'fixed-top',
        'bg-white',
        'shadow-lg'
      );
  } else {
    if (window.scrollY > 1200) {
      navbar.classList.add('opacity-90', 'fixed-top', 'bg-white', 'shadow-lg');
      scrollToTopBtn.classList.add('d-flex');
    } else {
      navbar.classList.contains('fixed-top');
      navbar.classList.remove(
        'opacity-90',
        'fixed-top',
        'bg-white',
        'shadow-lg'
      );
      scrollToTopBtn.classList.remove('d-flex');
    }
  }
};

// -------------------
const loadCurrentPage = () => {
  switch (Storage.getCurrentPage()) {
    case 'detail':
      loadDetailPage();
      break;

      case 'article':
      loadArticlePage();
      break;

      default:
      loadHomePage();
      break;
  }
};

const init = () => {
  loadCurrentPage();
  window.addEventListener('scroll', userScroll);
  window.addEventListener('scroll', handleCounter);

  // Expand Navbar on landscape mode
  landscapeMediaObj.matches &&
    navbar.classList.replace('navbar-expand-md', 'navbar-expand');

  landscapeMediaObj.addEventListener('change', (e) => {
    e.matches && navbar.classList.replace('navbar-expand-md', 'navbar-expand');
    !e.matches && navbar.classList.replace('navbar-expand', 'navbar-expand-md');
  });
};

document.addEventListener('DOMContentLoaded', init);
