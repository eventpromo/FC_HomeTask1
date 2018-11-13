class NewsList extends HTMLElement {
  constructor({ articles = [] }) {
    super();
    this.news = articles;
    this.className = 'news-list';

    const newsElements = this.news.map(item => {
      const { title, description } = item;
      
      const elem = document.createElement('div');
      elem.className = 'news-list__item news-item';
      
      const titleElement = document.createElement('div');
      titleElement.className = 'news-item__title';
      titleElement.innerHTML = title;

      const bodyElement = document.createElement('div');
      bodyElement.className = 'news-item__body';
      bodyElement.innerHTML = description;

      elem.appendChild(titleElement);
      elem.appendChild(bodyElement);
      return elem;
    });

    newsElements.forEach(element => {
      this.appendChild(element);
    });
  }
}

export default NewsList;