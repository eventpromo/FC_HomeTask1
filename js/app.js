import newsService from './services/QueryNewsService';
import NewsList from './components/NewsList';
import NewsItem from './components/NewsItem';

customElements.define('news-list', NewsList);
customElements.define('news-item', NewsItem);

document.addEventListener('DOMContentLoaded', () => {
  const mainElement = document.querySelector('main');
  const searchElement = document.querySelector('#news-query');
  const listElement = new NewsList({});
  mainElement.appendChild(listElement);

  searchElement.addEventListener('change', (ev) => {
    if (ev.target.value) {
      newsService.read().then(data => {
        listElement.items = data.articles;
      });
    }
  });
});