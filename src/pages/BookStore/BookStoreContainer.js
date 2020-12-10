import { Card } from 'components'

const BookStoreContainer = ({ data }) => {
  return (
    <div className="book-store">
       <div className="search-container">
        <form>
          <input type="text" placeholder="Search.." autoComplete="off" name="search" />
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
