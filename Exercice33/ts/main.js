function createBook(title, author, pages) {
    var book = {
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
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.removeBook = function (title) {
        var _this = this;
        this.books.forEach(function (book) {
            if (book.title == title) {
                _this.books.splice(_this.books.indexOf(book), 1);
            }
        });
    };
    Library.prototype.findBookByTitle = function (title) {
        var listBook = [];
        this.books.forEach(function (book) {
            if (book.title === title) {
                listBook.push(book);
            }
        });
        return listBook;
    };
    Library.prototype.listAvailableBooks = function () {
        var listBook = [];
        this.books.forEach(function (book) {
            if (book.isAvailable) {
                listBook.push(book);
            }
        });
        return listBook;
    };
    Library.prototype.getBooksByAuthor = function (authorName) {
        var listBook = [];
        this.books.forEach(function (book) {
            if (book.author.name == authorName) {
                listBook.push(book);
            }
        });
        return listBook;
    };
    return Library;
}());
var library = new Library();
var author1 = {
    name: "toto",
    birthYear: 1956,
    genres: "totoo"
};
var author2 = {
    name: "tata",
    birthYear: 1932,
    genres: "tataa"
};
var book1 = createBook("test", author1, 45);
var book2 = createBook("tiut", author2, 155);
var book3 = createBook("toas", author1, 78);
toggleAvailability(book3);
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
console.log(library.findBookByTitle("test"));
//console.log(library.listAvailableBooks());
//console.log(library.getBooksByAuthor(author1.name));
library.removeBook("toas");
//console.log(library.books);
