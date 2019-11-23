import BookElement from './components/book/book';
import BookListElement from './components/book-list/book-list';
import BookService from './services/books';
import http from './services/http';

customElements.define('book-item', BookElement);
customElements.define('book-list', BookListElement);

const service = new BookService(http);

const loadButtonElement = document.querySelector('.load');
loadButtonElement.addEventListener('click', async () => {
    const books = await service.getAll();
    document.body.appendChild(new BookListElement(books));
});

