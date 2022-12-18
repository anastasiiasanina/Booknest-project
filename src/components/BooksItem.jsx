import '../style/BooksList.css';

const BooksItem = (props) => {

  return (
    <div className='book-content'>
      <img onClick={() => {props.setModal(true); props.setBook(props.book)}} className='book-img' src={props.book.book_image} alt={props.book.title} height="330" width="240"/>
    </div>
  )
}

export default BooksItem;