import BooksItem from "./BooksItem";
import '../style/BooksList.css';

const BooksList = ({books}) => {
  return (
    <div id="list">
      {books.map((el, index) => 
        <BooksItem book={el} number={index++} key={el.id}/>
      )}
    </div>
  )
}

export default BooksList;