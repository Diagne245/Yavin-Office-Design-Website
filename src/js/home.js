import Storage from './storage';
import { loadDetailPage, loadArticlePage } from './detail';

import navbar_html from '../static_html_files/home/navbar.html';
import showcase_html from '../static_html_files/home/showcase.html';
import stats_html from '../static_html_files/home/stats.html';
import intro_1_html from '../static_html_files/home/intro_1.html';
import details_1_html from '../static_html_files/home/details_1.html';
import services_html from '../static_html_files/home/services.html';
import details_2_html from '../static_html_files/home/details_2.html';
import intro_2_html from '../static_html_files/home/intro_2.html';
import projects_html from '../static_html_files/home/projects.html';
import testimonials_html from '../static_html_files/home/testimonials.html';
import contact_html from '../static_html_files/home/contact.html';
import footer_html from '../static_html_files/home/footer.html';

// Projects Section Read More links opening Detail Page -----------
const readMoreListeners = () => {
  const projectSection = document.getElementById('projects');
  const readMoreLinks = projectSection.querySelectorAll(
    '.card-control .card-link'
  );

  readMoreLinks.forEach((link) => {
    link.addEventListener('click', loadDetailPage);
  });
};

const getStartedListeners = () => {
  const getStartedBtns = document.querySelectorAll('.get-started, .get-quote');

  getStartedBtns.forEach((btn) => {
    btn.addEventListener('click', loadArticlePage);
  });
};

// Load only navbar & footer
const loadBaseHTML = () => {
  document.querySelector('.navbar').innerHTML = navbar_html;
  document.getElementById('footer').innerHTML = footer_html;
};

const loadAllHTML = () => {
  document.querySelector('.navbar').innerHTML = navbar_html;
  document.getElementById('showcase').innerHTML = showcase_html;
  document.getElementById('stats').innerHTML = stats_html;
  document.getElementById('intro-1').innerHTML = intro_1_html;
  document.getElementById('details-1').innerHTML = details_1_html;
  document.getElementById('services').innerHTML = services_html;
  document.getElementById('details-2').innerHTML = details_2_html;
  document.getElementById('intro-2').innerHTML = intro_2_html;
  document.getElementById('projects').innerHTML = projects_html;
  document.getElementById('testamonials').innerHTML = testimonials_html;
  document.getElementById('contact').innerHTML = contact_html;
  document.getElementById('footer').innerHTML = footer_html;
};

// ------------------
const loadHomePage = () => {
  loadAllHTML();
  readMoreListeners();
  getStartedListeners();
  Storage.setCurrentPage('home');
  Storage.setProjectNumber(null);
};

export { loadHomePage, loadBaseHTML };
