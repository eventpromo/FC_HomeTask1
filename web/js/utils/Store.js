import Observer from './Observer';
import singletonDecorator from '../decorators/singletonDecorator';

class Store extends Observer {
  constructor(state = {}, handlers = []) {
    super();
    this.state = state;
    this.handlers = handlers;
  }

  listen = (action, data) => {
    const handler = this.handlers[action];
    if (!handler) {
      return;
    }
    this.state = handler(this.state, data);
    this.publish(this.state);
  }
}

const SingletonStore = singletonDecorator(Store);

export default SingletonStore;
