import BooksItem from "../BooksItem";
import '../../style/BooksList.css';
import { useState, useEffect } from "react";
import BookService from "../../API/BookService";

const BooksList = ({apiKey}) => {
  const [books, setBooks] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [list, setList] = useState('list');
  const [listEntered, setListEntered] = useState('hardcover-fiction');

  useEffect(() => {
    setLoaded(false);
    const fetchBooks = async () => {
      const res = await BookService.getBooks(apiKey, listEntered);
      setBooks(res.data.results.books);
      setTimeout(() => setLoaded(true), 3000);
    }
  
    fetchBooks();
  }, [listEntered]);

  return (
    <div id="main-block">
      <h3 id="find-category">Find your preferable category:</h3>
      <div id="search">
          <input id="list-input" type="text" placeholder="Enter category" onChange={(e) => setList(e.target.value)}/>
          <button id="search-btn" onClick={() => setListEntered(list)}>Search</button>
      </div>
      <div id="list">
          {books.map((el, index) => 
            <BooksItem book={el} number={index++} key={index} loaded={loaded}/>
          )}
      </div>
    </div>
  )
}

export default BooksList;