import Store from './Store';
import Dispatcher from './Dispatcher';

const store = new Store({
  articles: [],
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
