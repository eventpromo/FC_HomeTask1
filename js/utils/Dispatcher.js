import singletonDecorator from '../decorators/singletonDecorator';
import getNews from '../actions/getNews';
import updateListNews from '../actions/updateListNews';

class Dispatcher {
  constructor() {
    this.getNews = getNews;
    this.updateListNews = updateListNews;
  }

  dispatch(action, ...params) {
    this[action](...params);
  }
}

const SingletonStore = singletonDecorator(Dispatcher);

export default SingletonStore;
