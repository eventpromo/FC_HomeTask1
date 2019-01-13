import NewsFilter from './components/NewsFilter';
import NewsList from './components/NewsList';
import NewsItem from './components/NewsItem';
import App from './components/App';
import ContainerFactory from './utils/ContainerFactory';
import '../styles/main.scss';

customElements.define('news-filter', NewsFilter);
customElements.define('news-list', NewsList);
customElements.define('news-item', NewsItem);
customElements.define('news-app', App);

document.addEventListener('DOMContentLoaded', () => {
  const containerElement = document.querySelector('main');
  containerElement.replaceWith(ContainerFactory.create(App, { className: 'main' }));
});
