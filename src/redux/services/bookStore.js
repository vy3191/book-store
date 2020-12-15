
export const fetchBooks = (keyWord) => {
  const trimmedKeyWord = keyWord.replace(/\s+/g, ' ').trim();
  const url = `https://www.googleapis.com/books/v1/volumes?q=${trimmedKeyWord}`;  
  return fetch(url).then(response => response.json())
}