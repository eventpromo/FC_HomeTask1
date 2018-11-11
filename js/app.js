import newsService from './services/NewsService';
import NewsList from './components/NewsList';

var NewsListElement = document.registerElement('news-list',  { 
  prototype: Object.create(NewsList.prototype)
});

document.addEventListener('DOMContentLoaded', () => {
  debugger;
  newsService.read().then(items => {
    const main = document.querySelector('main');
    main.appendChild(new NewsListElement(items));
  });
});