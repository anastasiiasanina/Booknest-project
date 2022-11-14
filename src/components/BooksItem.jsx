import { useNavigate } from 'react-router-dom';
import '../style/BooksList.css';
import Loader from './Loader';

const BooksItem = (props) => {
  const router = useNavigate();

  return (
    <div className='book-content'>
      {!props.loaded &&
         <div style={{display: "flex", justifyContent: "center", margin: 50}}><Loader/></div> 
      }
      {props.loaded &&
        <img onClick={() => router(`/books/${props.number}`)} src={props.book.book_image} alt={props.book.title} height="330" width="240"/>
      }
      </div>
  )
}

export default BooksItem;
