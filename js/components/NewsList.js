class NewsList extends HTMLElement {
  constructor(items = []) {
    this.news = items;
  }

  createdCallback() {
    const shadow = this.createShadowRoot();
    const listElement = document.createElement('div');
    listElement.className = 'news-list';

    const newsElements = this.news.map(item => {
      const elem = document.createElement('div');
      elem.className = 'news-list__item news-item';

      const title = document.createElement('div');
      title.className = 'news-item__title';

      const body = document.createElement('div');
      body.className = 'news-item__body';

      elem.appendChild(title);
      elem.appendChild(body);
      return elem;
    });

    newsElements.forEach(element => {
      listElement.appendChild(element);
    });

    shadow.appendChild(listElement);
  };
}