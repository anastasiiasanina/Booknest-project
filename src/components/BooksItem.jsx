import { useNavigate } from 'react-router-dom';
import '../style/BooksList.css';

const BooksItem = (props) => {
  const router = useNavigate();

  return (
    <div className='book-content'>
      <img id='book-img' onClick={() => router(`/books/${props.number}`)} src={props.book.book_image} alt={props.book.title} height="330" width="240"/>
    </div>
  )
}

export default BooksItem;
