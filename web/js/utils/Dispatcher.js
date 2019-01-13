import Observer from './Observer';
import singletonDecorator from '../decorators/singletonDecorator';

class Dispatcher extends Observer {
  dispatch(action, ...params) {
    const result = action(...params);
    if (result) {
      this.publish(action.name, result);
    }
  }
}

const SingletonStore = singletonDecorator(Dispatcher);

export default SingletonStore;
