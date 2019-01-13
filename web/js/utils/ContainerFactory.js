import Store from './Store';
import Dispatcher from './Dispatcher';
import * as handlers from '../handlers';
import * as actions from '../actions';

const store = new Store({
  articles: [],
}, {
  [actions.requestNews.name]: handlers.setQuery,
  [actions.receiveNews.name]: handlers.updateListNews,
});

new Dispatcher().addSubscriber(store.listen);

class ContainerFactory {
  static create(Type, ...params) {
    const instance = new Type(...params);
    store.addSubscriber(instance.stateChangedCallback.bind(instance));
    return instance;
  }
}

export default ContainerFactory;
