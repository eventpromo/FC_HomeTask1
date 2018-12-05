import NewsItem from './NewsItem';
import '../../styles/news.scss';
import singletonDecorator from '../decorators/singletonDecorator';

class NewsList extends HTMLElement {
  static get observedAttributes() {
    return ['items'];
  }

  constructor({ articles = [], className = '' }) {
    super();
    this.news = articles;
    this.className = `news-list ${className}`;
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
    /* eslint-disable */
    for (let element of this) {
      this.appendChild(element);
    }
    /* eslint-enable */
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
    case 'items':
      this.news = JSON.parse(newValue) || [];
      this.render();
      break;
    default:
      break;
    }
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.currentIndex < this.news.length) {
          const index = this.currentIndex;
          this.currentIndex += 1;
          return { value: new NewsItem(this.news[index]), done: false };
        }
        this.currentIndex = 0;
        return { value: undefined, done: true };
      },
    };
  }
}

export default NewsList;

const NewsListSingleton = singletonDecorator(NewsList);

export { NewsListSingleton };
