class Container extends HTMLElement {
  stateChangedCallback(store) {
    this.store = store;
  }
}

export default Container;
