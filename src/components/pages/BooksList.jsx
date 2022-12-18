import BooksItem from "../BooksItem";
import BookDetail from "../BookDetail";
import '../../style/BooksList.css';
import { useState, useEffect } from "react";
import BookService from "../../API/BookService";
import Loader from "../Loader";
import { Fetching } from "../../helpers/fetch";
import Modal from "../Modal";

const BooksList = ({apiKey, listEntered, setListEntered}) => {
  const [list, setList] = useState('list');
  const [height, setHeight] = useState("65vh");
  const [books, setBooks] = useState([]);
  const [modal, setModal] = useState(false);
  const [currBook, setBook] = useState();
  
  const [fetchBooks, loaded, error] = Fetching(async () => {
    setBooks([]);
    setHeight("65vh");
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
        <button id="search-btn" onClick={() => {
          setListEntered(list);
        }}>Search</button>
      </div>
      {error && <h3 className="info">{error}</h3>}
      {!error && <h3 className="info">Category: {listEntered}</h3>}
      {!loaded &&
        <div style={{display: "flex", justifyContent: "center", margin: 50}}><Loader/></div> 
      }
      {loaded && 
        <div className="list">
          {books.map((el, index) => 
            <BooksItem setModal={setModal} setBook={setBook} book={el} id={index++} key={index}/>    
          )}
          <Modal visible={modal} setVisible={setModal}>
            <BookDetail currBook={currBook}/>
          </Modal>
        </div>
      }
    </div>
  )
}

export default BooksList;