class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }
    issueBook() {
        if (this.isIssued) console.log(this.title + " is already issued.");
        else {
            this.isIssued = true;
            console.log(this.title + " has been issued.");
        }
    }
    returnBook() {
        if (!this.isIssued) console.log(this.title + " is already available.");
        else {
            this.isIssued = false;
            console.log(this.title + " has been returned.");
        }
    }
}
const books = [
    new Book("The Alchemist", "Paulo Coelho", "ISBN101"),
    new Book("Wings of Fire", "A. P. J. Abdul Kalam", "ISBN102"),
    new Book("Atomic Habits", "James Clear", "ISBN103", true)
];
function displayAvailableBooks() {
    console.log("Available Books:");
    books.filter(book => !book.isIssued).forEach(book =>
        console.log(`${book.title} by ${book.author} (${book.ISBN})`)
    );
}
function issueBookByISBN(isbn) {
    const book = books.find(book => book.ISBN === isbn);
    if (book) book.issueBook();
    else console.log("Book not found.");
}
displayAvailableBooks();
issueBookByISBN("ISBN102");
