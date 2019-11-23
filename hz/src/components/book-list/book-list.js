import template from './book-list.html';
import BookElement from '../book/book';
import HtmlTemplateBinder from '../../infrastructure/binders/html-template-binder';

class BookListElement extends HTMLElement {
    constructor(books) {
        super();
        this.books = books;
        this.element = HtmlTemplateBinder.bind(template, books);
        this.books.forEach(book => {
            this.element.appendChild(new BookElement(book))
        });
        this.appendChild(this.element);
    }
}

export default BookListElement;