class Book {
  constructor(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isIssued = false;
  }

  issueBook() { this.isIssued = true; }
  returnBook() { this.isIssued = false; }
}

const library = [
  new Book("JS Basics", "Kyle Simpson", "111"),
  new Book("Python Crash Course", "Eric Matthes", "222")
];

console.log("Available:", library.filter(b => !b.isIssued));
library[0].issueBook();
console.log("After issuing:", library.filter(b => !b.isIssued));
