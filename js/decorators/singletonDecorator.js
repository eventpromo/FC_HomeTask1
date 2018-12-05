
function singletonDecorator(Type) {
  class Singleton extends Type {
    static instance;

    constructor(...args) {
      if (Singleton.instance) {
        return Singleton.instance;
      }
      super(...args);
      Singleton.instance = this;
      return Singleton.instance;
    }
  }
  return Singleton;
}

export default singletonDecorator;
