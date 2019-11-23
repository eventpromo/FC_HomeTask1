import Book from '../models/books';

class BookService
{
    constructor(http) {
        this.http = http;
    }

    mapBook = (data) => {
        const book = new Book(data.id, data.title, data.author, new Date(data.date));
        book.id = data.id;
        return book;
    }

    async get(id) {
        const data = await this.http.get(`https://site.com/books/${id}`);
        return this.mapBook(data);
    }

    async getAll() {
        // const data = await this.http.get(`https://site.com/books`);
        // return data.map(x => this.mapBook(x));
        return new Promise((function(resolve, reject) {
            resolve([
                new Book('test1', 'test1', Date.now()),
                new Book('test2', 'test2', Date.now()),
                new Book('test3', 'test3', Date.now()),
                new Book('test4', 'test4', Date.now()),
                new Book('test5', 'test5', Date.now())
            ]);
        }));
    }

    async update(book) {
        const data = await this.http.post(`https://site.com/books/${book.id}`, book);
        return this.mapBook(data);
    }

    async create(book) {
        const data = await this.http.post(`https://site.com/books`, book);
        return this.mapBook(data);
    }

    delete(id) {
        return this.http.post(`https://site.com/books/${id}`)
            .then(() => true)
            .catch(() => false);
    }
}

export default BookService;