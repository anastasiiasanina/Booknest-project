import { useParams } from "react-router";
import '../style/BookDetail.css';

const BookDetail = (props) => {
  let params = useParams();
  let currBook = props.books.filter((el, index) => index++ == params.id)[0];
  console.log(currBook);

  return (
    <div style={{}} className="main-block">
      <div className="book-card">
        <img className='book-img' src={currBook.book_image} alt={currBook.title} height="340px" width="240px"/>
        <div className="book-info">
          <p>Title: {currBook.title}</p>
          <p>Author: {currBook.author}</p>
          <p>About: {currBook.description}</p>
          <p>Link on Amazon: <a href={currBook.buy_links[0].url}>Buy this book</a></p>
        </div>
      </div>
    </div>
  )
}

export default BookDetail;