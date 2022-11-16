import BooksItem from "../BooksItem";
import '../../style/BooksList.css';
import { useState, useEffect } from "react";
import BookService from "../../API/BookService";
import Loader from "../Loader";
import { Fetching } from "../../helpers/fetch";

const BooksList = ({apiKey}) => {
  const [books, setBooks] = useState([]);
  const [list, setList] = useState('list');
  const [listEntered, setListEntered] = useState('Hardcover fiction');
  const [height, setHeight] = useState("65vh");
  const [fetchBooks, loaded, error] = Fetching(async () => {
    const res = await BookService.getBooks(apiKey, parseInput(listEntered));
    setBooks(res.data.results.books);
    setHeight();
  }, "No category with this name");

  useEffect(() => {
    fetchBooks();
  }, [listEntered]);

  const parseInput = (string) => {
    return string.toLowerCase().split(" ").join("-");
  }

  return (
    <div style={{height: height}} className="main-block">
      <h3 className="info">Find your preferable category.</h3> <br/>
      <h3 className="info">In section Suggestions you may find the list.</h3>
      <div id="search">
        <input id="list-input"  type="text" placeholder="Enter category" onChange={(e) => setList(e.target.value)}/>
        <button id="search-btn" onClick={() => setListEntered(list)}>Search</button>
      </div>
      {error && <h3 className="info">{error}</h3>}
      {!error && <h3 className="info">Category: {listEntered}</h3>}
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