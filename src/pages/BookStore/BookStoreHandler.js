import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchBooks as fetchBooksAction } from '../../redux/actions';
import BookStoreContainer from './BookStoreContainer'

const BookStoreHandler = ({ fetchBooks, data }) => {
 
  const handleSearch = (event) => {
    event.preventDefault();  
    const form = new FormData(event.target);
    let searchValue = form.get('books');
    searchValue = searchValue.replace(' ', '+');
    fetchBooks(searchValue)
  }

  return (
    <>
      <BookStoreContainer onSearch={handleSearch}  data={data} />
    </>
  )
}

BookStoreHandler.propTypes = {
  fetchBooks: PropTypes.func,
  data: PropTypes.array
}

const mapStateToProps = (state) => {
  const { bookStore: { data } } = state
  return {
    data
  }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchBooks: fetchBooksAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookStoreHandler)
