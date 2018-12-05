import newsService from './services/QueryNewsService';
import { NewsFilterSingleton } from './components/NewsFilter';
import { NewsListSingleton } from './components/NewsList';
import NewsItem from './components/NewsItem';
import '../styles/main.scss';

customElements.define('news-filter', NewsFilterSingleton);
customElements.define('news-list', NewsListSingleton);
customElements.define('news-item', NewsItem);

document.addEventListener('DOMContentLoaded', () => {
  const mainElement = document.querySelector('main');
  mainElement.appendChild(new NewsFilterSingleton({ className: 'main__item' }));
  mainElement.appendChild(new NewsListSingleton({ className: 'main__item' }));

  new NewsFilterSingleton().addEventListener('change', async (ev) => {
    if (ev.target.value) {
      const data = await newsService.read(ev.target.value);
      new NewsListSingleton().items = data.articles;
    }
  });
});
