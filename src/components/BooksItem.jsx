import '../style/BooksList.css';

const BooksItem = ({book, key}) => {
  return (
    <div>
      <div className='book-content'>
        <img src={book.image} alt={book.name} height="300" width="220"/>
      </div>
    </div>
  )
}

export default BooksItem;
