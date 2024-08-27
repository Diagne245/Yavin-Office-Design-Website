class Storage {
  static setCurrentPage = (current) => {
    localStorage.setItem('current-page', current);
  };
  static getCurrentPage = () => {
    return localStorage.getItem('current-page');
  };

  static setProjectNumber = (number) => {
    localStorage.setItem('project-number', number);
  };
  static getProjectNumber = () => {
    return localStorage.getItem('project-number');
  };
}

export default Storage;
