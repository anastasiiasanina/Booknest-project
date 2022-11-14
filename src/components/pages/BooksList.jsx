import BooksItem from "../BooksItem";
import '../../style/BooksList.css';
import { useState, useEffect } from "react";
import BookService from "../../API/BookService";

const BooksList = ({apiKey}) => {
  const [books, setBooks] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [list, setList] = useState(null);
  const [listEntered, setListEntered] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await BookService.getBooks(apiKey);
      setBooks(res.data.results.books);
      setTimeout(() => setLoaded(true), 3000);
    }
  
    fetchBooks();
  }, []);

  const renderBookList = () => {
    if(list != null) {
      return (
        <div id="list">
          {books.map((el, index) => 
            <BooksItem book={el} number={index++} key={index} loaded={loaded}/>
          )}
        </div>
      )
    }
  }

  const renderListSearch = () => {
    if(!listEntered) {
      return (
        <div id="search">
          <input type="text" placeholder="Enter category" onChange={(e) => setList(e.target.value)}/>
          <button onClick={() => setListEntered(true)}>Search</button>
        </div>
      )
    }
  }

  return (
    <div>
      {renderListSearch()}
    </div>
  )
}

export default BooksList;