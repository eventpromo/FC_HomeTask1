import newsService from './services/QueryNewsService';
import NewsList from './components/NewsList';
import NewsItem from './components/NewsItem';

customElements.define('news-list', NewsList);
customElements.define('news-item', NewsItem);

document.addEventListener('DOMContentLoaded', () => {
  newsService.read('sport').then(data => {
    const main = document.querySelector('main');
    main.appendChild(new NewsList(data));
  });
});