import Observer from './Observer';
import singletonDecorator from '../decorators/singletonDecorator';

class Store extends Observer {
  constructor(state = {}, handlers = []) {
    super();
    this.state = state;
    this.handlers = handlers;
  }

  listen = (action, ...params) => {
    const handler = this.handlers.get(action);
    this.state = handler(this.state, ...params);
    this.publish(this.state);
  }
}

const SingletonStore = singletonDecorator(Store);

export default SingletonStore;
