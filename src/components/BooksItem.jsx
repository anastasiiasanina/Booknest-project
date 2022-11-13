import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/BooksList.css';
import Loader from './Loader';

const BooksItem = ({book, number, key}) => {
  const router = useNavigate();
  const [loaded, setLoad] = useState(false);

  return (
    <div className='book-content'>
      {setTimeout(() => setLoad(true),3000)}
      {!loaded &&
         <div style={{display: "flex", justifyContent: "center", margin: 50}}><Loader/></div> 
      }
      {loaded &&
        <img onClick={() => router(`/books/${number}`)} src={book.book_image} alt={book.title} height="330" width="240"/>
      }
      </div>
  )
}

export default BooksItem;
