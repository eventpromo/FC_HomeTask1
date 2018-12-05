import Observer from './Observer';
import singletonDecorator from '../decorators/singletonDecorator';

class Store extends Observer {
  constructor(state = {}) {
    super();
    this.state = state;
  }

  setState(state) {
    this.state = {
      ...this.state,
      ...state,
    };
    this.publish(this.state);
  }
}

const SingletonStore = singletonDecorator(Store);

export default SingletonStore;
