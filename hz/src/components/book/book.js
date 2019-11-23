import template from './book.html';
import HtmlTemplateBinder from '../../infrastructure/binders/html-template-binder';

class BookElement extends HTMLElement {
    constructor(book) {
        super();
        this.book = book;        
        this.element = HtmlTemplateBinder.bind(template, book);
        this.hiddenButton = this.element.querySelector('button');
        this.hiddenButton.addEventListener('click', () => this.hide());
        this.appendChild(this.element);
    }

    hide() {
        this.style.display = 'none';
    }
}

export default BookElement;