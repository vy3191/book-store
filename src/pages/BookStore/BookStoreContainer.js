import { Card } from 'components'

const BookStoreContainer = ({ data }) => {
  return (
    <div className="book-store">
      {data.map((book) => (
        <Card key={book.id} {...book} />
      ))}
    </div>
  )
}

export default BookStoreContainer
