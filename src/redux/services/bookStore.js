export default class Service {
  constructor(baseUrl) {
    this.baseUrl = baseUrl || 'https://www.googleapis.com'
  }

  get(path) {
    const url = `${this.baseUrl}${path}`;
    return fetch(url).then(res => res.json());
  } 

}

const myService = new Service();

export const fetchBooks = (keyWord) => {
  const trimmedKeyWord = keyWord.replace(/\s+/g, ' ').trim();
  const path = `/books/v1/volumes?q=${trimmedKeyWord}`;  
  return myService.get(path)
}

export const getVolume = (id) => {
  const path = `/books/v1/volumes/${id}`;
  return myService.get(path)
}


