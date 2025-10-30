// You can work here or download the template!

const book = {
  title: 'Dune',
  author: 'Frank Herbert',
  pages: 500,
  isRead: true,
  summary() {
    console.log(
      `Title: ${this.title}, Author: ${this.author}, Pages: ${
        this.pages
      }, Read: ${this.isRead ? 'Yes' : 'No'}`
    );
  },
};

// console.log(book);

book.isRead = false;
book.summary();

book.getAuthorInfo = function () {
  return `${this.author} has written ${this.title}`;
};

console.log(book.getAuthorInfo());
