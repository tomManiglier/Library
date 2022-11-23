const form = document.querySelector('.form');
const titleInput = document.querySelector('.title');
const authorInput = document.querySelector('.author');
const pagesInput = document.querySelector('.pages');
const readInput = document.querySelector('.read');

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        console.log(title + ' by ' + author + ', ' + pages + ' pages, ' + read)
    }
}

form.addEventListener('submit', () => {
    const count = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.value);
    count.info();
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    readInput.value = '';
});