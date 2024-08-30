function createBook(title, author, pages) {
    let book = {
        title: title,
        author: author,
        pages: pages,
        isAvailable: true
    };
    return book;
}
function toggleAvailability(book) {
    book.isAvailable = !book.isAvailable;
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    removeBook(title) {
        this.books.forEach(book => {
            if (book.title == title) {
                this.books.splice(this.books.indexOf(book), 1);
            }
        });
    }
    findBookByTitle(title) {
        let listBook = [];
        this.books.forEach(book => {
            if (book.title === title) {
                listBook.push(book);
            }
        });
        return listBook;
    }
    listAvailableBooks() {
        let listBook = [];
        this.books.forEach(book => {
            if (book.isAvailable) {
                listBook.push(book);
            }
        });
        return listBook;
    }
    getBooksByAuthor(authorName) {
        let listBook = [];
        this.books.forEach(book => {
            if (book.author.name == authorName) {
                listBook.push(book);
            }
        });
        return listBook;
    }
}
let library = new Library();
let author1 = {
    name: "toto",
    birthYear: 1956,
    genres: "totoo"
};
let author2 = {
    name: "tata",
    birthYear: 1932,
    genres: "tataa"
};
let book1 = createBook("test", author1, 45);
let book2 = createBook("tiut", author2, 155);
let book3 = createBook("toas", author1, 78);
toggleAvailability(book3);
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
console.log(library.findBookByTitle("test"));
console.log(library.listAvailableBooks());
console.log(library.getBooksByAuthor(author1.name));
library.removeBook("toas");
console.log(library.books);
