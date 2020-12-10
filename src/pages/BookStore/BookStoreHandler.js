import { connect } from 'react-redux';
import BookStoreContainer from './BookStoreContainer';

const BookStoreHandler = () => {
  return (
    <BookStoreContainer  />
  )
}

BookStoreHandler.propTypes = {
  data: PropTypes.string
}

const mapStateToProps = (state) => {
   const { testData } = state;
   return {
     data: testData
   }
}

export default connect(mapStateToProps)(BookStoreHandler);
