import newsService from './services/QueryNewsService';
import '../styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  const mainElement = document.querySelector('main');
  const searchElement = document.querySelector('#news-query');

  searchElement.addEventListener('change', async (ev) => {
    let listElement = document.querySelector('news-list');
    if (!listElement) {
      const NewsList = (await import('./components/NewsList')).default;
      const NewsItem = (await import('./components/NewsItem')).default;

      customElements.define('news-list', NewsList);
      customElements.define('news-item', NewsItem);

      listElement = new NewsList({});
      listElement.className += ' main__item';
      mainElement.appendChild(listElement);
    }

    if (ev.target.value) {
      const data = await newsService.read(ev.target.value);
      listElement.items = data.articles;
    }
  });
});
