import { Card } from 'components'

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
        <Card key={book.id} {...book} />
      ))}
    </div>
  )
}

export default BookStoreContainer
