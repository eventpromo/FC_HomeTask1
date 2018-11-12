class NewsList extends HTMLElement {
  constructor(data = {}) {
    super();
    this.news = data.articles || [];
    this.className = 'news-list';

    const newsElements = this.news.map(item => {
      const elem = document.createElement('div');
      elem.className = 'news-list__item news-item';
      
      const title = document.createElement('div');
      title.className = 'news-item__title';
      title.innerHTML = item.title;

      const body = document.createElement('div');
      body.className = 'news-item__body';
      body.innerHTML = item.description;

      elem.appendChild(title);
      elem.appendChild(body);
      return elem;
    });

    newsElements.forEach(element => {
      this.appendChild(element);
    });
  }
}

export default NewsList;