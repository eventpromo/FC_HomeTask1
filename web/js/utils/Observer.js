class Observer {
  constructor() {
    this.subscribers = [];
  }

  addSubscriber(subscriber) {
    if (!(subscriber instanceof Function)) {
      throw new Error('Subscriber isn\'t function');
    }
    this.subscribers[this.subscribers.length] = subscriber;
  }

  removeSubscriber(subscriber) {
    this.subscribers = this.subscribers.filter(item => item === subscriber);
  }

  publish(...params) {
    this.subscribers.forEach(subscriber => subscriber(...params));
  }
}

export default Observer;
