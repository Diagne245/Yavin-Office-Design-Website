import Storage from './storage';
import { loadHomePage, loadBaseHTML } from './home';
import article_html from '../static_html_files/details/article.html';

// ---------------
const getProjectNumber = (e = null) => {
  if (e === null) {
    return +Storage.getProjectNumber();
  }

  const list = Array.from(e.target.classList);
  return list[1].charAt(8);
};

// Function to hide the body sections and leave only the detail one ------
const sections = document.querySelectorAll('section');
const clearBody = () => {
  sections.forEach((section) => {
    section.id !== 'detail-page' && section.classList.add('d-none');
  });
};

const restoreBody = () => {
  sections.forEach((section) => {
    section.id !== 'detail-page' && section.classList.remove('d-none');
  });

  document.getElementById('detail-page').innerHTML = '';
};

// Change nav links when in detail page to go to home page
const detailNavLinksListeners = () => {
  const navLinks = document.querySelectorAll(
    '.navbar-brand, .nav-link , .footer-link, .contact-btn'
  );
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      restoreBody();
      loadHomePage();
    });
  });
};

// -----------------------
const loadDetailPage = async (e = null) => {
  const project_detail_html = await import(
    `../static_html_files/details/project_${getProjectNumber(e)}.html`
  );

  // Case we are reloading or getting to detail page through read more link
  clearBody();
  e === null && loadBaseHTML();

  document.getElementById('detail-page').innerHTML =
    project_detail_html.default;
  Storage.setCurrentPage('detail');
  Storage.setProjectNumber(getProjectNumber(e));
  detailNavLinksListeners();
  scrollTo(0, 0);
};

const loadArticlePage = (e = null) => {
  clearBody();
  e === null && loadBaseHTML();

  document.getElementById('detail-page').innerHTML = article_html;
  Storage.setCurrentPage('article');
  detailNavLinksListeners();
  scrollTo(0, 0);
};

export { loadDetailPage, loadArticlePage };
