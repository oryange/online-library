const URL_API = 'https://www.googleapis.com/books/v1/volumes';

function fetchBooks(query) {
  return fetch(`${URL_API}?q=${query}&printType=books`)
  .then((response) => response.json())
}

export default fetchBooks;
