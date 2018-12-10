import Observer from './Observer';
import singletonDecorator from '../decorators/singletonDecorator';

class Dispatcher extends Observer {
  dispatch(action, ...params) {
    this.publish(action, ...params);
  }
}

const SingletonStore = singletonDecorator(Dispatcher);

export default SingletonStore;
