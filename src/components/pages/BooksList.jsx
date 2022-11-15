import BooksItem from "../BooksItem";
import '../../style/BooksList.css';
import { useState, useEffect } from "react";
import BookService from "../../API/BookService";
import Loader from "../Loader";

const BooksList = ({apiKey}) => {
  const [books, setBooks] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [list, setList] = useState('list');
  const [listEntered, setListEntered] = useState('hardcover-fiction');
  const [height, setHeight] = useState("65vh");

  useEffect(() => {
    const fetchBooks = async () => {
      setLoaded(false);
      const res = await BookService.getBooks(apiKey, listEntered);
      setBooks(res.data.results.books);
      setLoaded(true);
      setHeight();
    }
  
    fetchBooks();
  }, [listEntered]);

  const parseInput = (string) => {
    return string.toLowerCase().split(" ").join("-");
  }

  return (
    <div style={{height: height}} id="main-block">
      <h3 className="info">Find your preferable category.</h3> <br/>
      <h3 className="info">In section Suggestions you may find the list.</h3>
      <div id="search">
        <input id="list-input"  type="text" placeholder="Enter category" onChange={(e) => setList(e.target.value)}/>
        <button id="search-btn" onClick={() => setListEntered(parseInput(list))}>Search</button>
      </div>
      {!loaded &&
        <div style={{display: "flex", justifyContent: "center", margin: 50}}><Loader/></div> 
      }
      <div className="list">
        {books.map((el, index) => 
          <BooksItem book={el} number={index++} key={index}/>    
        )}
      </div>
    </div>
  )
}

export default BooksList;