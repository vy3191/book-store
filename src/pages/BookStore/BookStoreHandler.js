import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import BookStoreContainer from './BookStoreContainer'

const BookStoreHandler = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
 
  const handleSearch = (event) => {
    event.preventDefault();
  
    const form = new FormData(event.target);
    let searchValue = form.get('books');
    searchValue = searchValue.replace(' ', '+');

    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchValue}`;
  
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(dataMapper(data)))
      .catch(() => setError(true))
  }

  const dataMapper = (data) =>
    data &&
    data.items.map((item) => ({
      imgSrc: item.volumeInfo.imageLinks.thumbnail,
      imgAlt: item.volumeInfo.authors.join(', '),
      title: item.volumeInfo.title,
      id: item.id,
    }))

  return (
    <>
      <BookStoreContainer onSearch={handleSearch} error={error} data={data} />
    </>
  )
}

BookStoreHandler.propTypes = {
  data: PropTypes.string,
}

const mapStateToProps = (state) => {
  const { testData } = state
  return {
    data: testData,
  }
}

export default connect(mapStateToProps)(BookStoreHandler)
