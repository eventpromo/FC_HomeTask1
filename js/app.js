import newsService from './services/SportNewsService';
import NewsList from './components/NewsList';

customElements.define('news-list', NewsList);

document.addEventListener('DOMContentLoaded', () => {
  newsService.read().then(data => {
    const main = document.querySelector('main');
    main.appendChild(new NewsList(data));
  });
});