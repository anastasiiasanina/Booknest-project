import { useNavigate } from 'react-router-dom';
import '../style/BooksList.css';

const BooksItem = ({book, number, key}) => {
  const router = useNavigate();

  return (
    <div className='book-content'>
      <img onClick={() => router(`/books/${book.id}`)} src={book.image} alt={book.name} height="320" width="240"/>
    </div>
  )
}

export default BooksItem;
