import { Card } from 'components'
import { NavLink } from 'react-router-dom';

const BookStoreContainer = ({ data, onSearch }) => {
  return (
    <div className="book-store">
      <div className="search-container">
        <form
          onSubmit={onSearch}
        >
          <input
            type="text"
            placeholder="Search.."
            autoComplete="off"
            name="books"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      {data.map((book) => (
        <NavLink exact to={`/book-store/${book.id}`} key={book.id} >
          <Card {...book} />
        </NavLink>
      ))}
    </div>
  )
}

export default BookStoreContainer
