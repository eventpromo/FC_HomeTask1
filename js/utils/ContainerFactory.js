import Store from './Store';

class ContainerFactory {
  static create(Type, ...params) {
    const instance = new Type(...params);
    new Store().addSubscriber(instance.stateChangedCallback.bind(instance));
    return instance;
  }
}

export default ContainerFactory;
