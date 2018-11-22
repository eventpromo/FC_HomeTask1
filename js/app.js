import newsService from './services/QueryNewsService';
import NewsList from './components/NewsList';
import NewsItem from './components/NewsItem';

customElements.define('news-list', NewsList);
customElements.define('news-item', NewsItem);

document.addEventListener('DOMContentLoaded', () => {
  const mainElement = document.querySelector('main');
  const searchElement = document.querySelector('#news-query');
  const listElement = new NewsList({});
  listElement.className += ' main__item';  
  mainElement.appendChild(listElement);

  searchElement.addEventListener('change', async (ev) => {
    if (ev.target.value) {
      const data = await newsService.read(ev.target.value);
      listElement.items = data.articles;
    }
  });
});