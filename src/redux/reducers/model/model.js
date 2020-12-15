export const listBooks = (data) => 
data &&
data.items.map((item) => ({
  imgSrc: item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail,
  imgAlt:  item.volumeInfo.authors && item.volumeInfo.authors.join(', '),
  title: item.volumeInfo.title,
  id: item.id,
}))