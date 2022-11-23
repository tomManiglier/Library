const form = document.querySelector('.form');
const titleInput = document.querySelector('.title');
const authorInput = document.querySelector('.author');
const pagesInput = document.querySelector('.pages');
const readInput = document.querySelector('.read');
const container = document.querySelector('.container');

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
    const phr = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.value);

    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<span>${phr.title}</span><span>${phr.author}</span><span>${phr.read} / ${phr.pages}</span>`;
    
    container.appendChild(card);

    card.addEventListener('click', () => {
        card.remove();
    })

    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    readInput.value = '';
});