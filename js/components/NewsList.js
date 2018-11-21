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
    this.currentIndex = 0;
  }

  get items() {
    return this.news;
  }
  
  set items(newValue) {
    this.setAttribute('items', JSON.stringify(newValue));
  }

  render() {
    this.innerHTML = '';
    for(let element of this){
      this.appendChild(element);
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'items':
        this.news = JSON.parse(newValue) || [];
        this.render();
      break;
    }
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.currentIndex < this.news.length) {
          return { value: new NewsItem(this.news[this.currentIndex++]), done: false };
        }
        this.currentIndex = 0;
        return {value: undefined, done: true};
      }
    }
  }
}

export default NewsList;