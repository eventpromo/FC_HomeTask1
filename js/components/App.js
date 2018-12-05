import Container from './Container';
import NewsFilter from './NewsFilter';
import NewsList from './NewsList';
import singletonDecorator from '../decorators/singletonDecorator';


class App extends Container {
  constructor({ className }) {
    super();
    this.className = `main ${className}`;
    this.filter = new NewsFilter({ className: 'main__item' });
    this.appendChild(this.filter);
    this.list = new NewsList({ className: 'main__item' });
    this.appendChild(this.list);
  }

  stateChangedCallback(store) {
    super.stateChangedCallback(store);
    this.list.items = [...store.articles];
  }
}

export default singletonDecorator(App);
