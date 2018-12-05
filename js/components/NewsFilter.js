
import singletonDecorator from '../decorators/singletonDecorator';

class NewsFilter extends HTMLElement {
  static get observedAttributes() {
    return ['onchange'];
  }

  constructor({ className = '', onchange = () => {} }) {
    super();
    this.className = `news-filter ${className}`;
    this.innerHTML = '<label for="news-query">Search:</label>';

    const input = document.createElement('input');
    input.type = 'text';
    input.onchange = this.onChange(onchange);
    this.query = input;

    this.appendChild(input);
  }

  onChange(onchange) {
    return (ev) => {
      onchange(ev);
      this.dispatchEvent(new CustomEvent('change', {
        detail: {
          ...ev,
        },
      }));
    };
  }

  get onchange() {
    return this.query.onchange;
  }

  set onchange(newValue) {
    this.setAttribute('onchange', newValue);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }
    switch (name) {
    case 'onchange':
      if (newValue === null) {
        this.query.onchange = null;
      } else {
        /* eslint-disable */
        this.oncheck = this.onChange(function() { eval(newValue); });        
        /* eslint-enable */
      }
      break;
    default:
      break;
    }
  }
}

export default NewsFilter;

const NewsFilterSingleton = singletonDecorator(NewsFilter);

export { NewsFilterSingleton };
