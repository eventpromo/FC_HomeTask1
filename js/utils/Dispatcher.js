import Observer from './Observer';
import singletonDecorator from '../decorators/singletonDecorator';

class Dispatcher extends Observer {
  dispatch(action, ...params) {
    const objectAction = action(...params);
    if (typeof objectAction === 'object') {
      this.publish(objectAction);
    }
  }
}

const SingletonStore = singletonDecorator(Dispatcher);

export default SingletonStore;
