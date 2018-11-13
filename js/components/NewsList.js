import NewsItem from './NewsItem';

class NewsList extends HTMLElement {
  static get observedAttributes() {
    return ['items'];
  }

  constructor({ articles = [] }) {
    super();
    this.news = articles;
    this.className = 'news-list';
    this.render();
  }

  get items() {
    return this.news;
  }
  
  set items(newValue) {
    this.setAttribute('items', JSON.stringify(newValue));
  }

  render() {
    this.innerHTML = '';
    const newsElements = this.news.map(item => new NewsItem(item));
    newsElements.forEach(element => this.appendChild(element));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'items':
        this.news = JSON.parse(newValue) || [];
        this.render();
      break;
    }
  }
}

export default NewsList;