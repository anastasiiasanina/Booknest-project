import { useParams } from "react-router";
import '../style/BookDetail.css';

const BookDetail = (props) => {
  let params = useParams();
  let currBook = props.books.filter((el, index) => index++ == params.id)[0];
  console.log(currBook);

  return (
    <div className="main-block">

    </div>
  )
}

export default BookDetail;