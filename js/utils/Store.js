import Observer from './Observer';
import singletonDecorator from '../decorators/singletonDecorator';

class Store extends Observer {
  constructor(state = {}) {
    super();
    this.state = state;
  }

  listen = (action) => {
    if (!action.reducer) {
      return;
    }
    this.state = action.reducer(this.state, action.data);
    this.publish(this.state);
  }
}

const SingletonStore = singletonDecorator(Store);

export default SingletonStore;
