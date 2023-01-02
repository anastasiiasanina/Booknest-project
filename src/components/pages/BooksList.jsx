import BooksItem from "../BooksItem";
import BookDetail from "../BookDetail";
import '../../style/BooksList.css';
import { useState, useEffect } from "react";
import BookService from "../../API/BookService";
import ListService from "../../API/ListService";
import Loader from "../Loader";
import { Fetching } from "../../helpers/fetch";
import Modal from "../Modal";
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";

const BooksList = ({apiKey, listEntered, setListEntered}) => {
  const [list, setList] = useState('list');
  const [height, setHeight] = useState("65vh");
  const [books, setBooks] = useState([]);
  const [modal, setModal] = useState(false);
  const [currBook, setBook] = useState();
  const [category, setCategory] = useState([]);

  const [fetchList, listLoaded, listError] = Fetching(async () => {
    const res = await ListService.getList(apiKey);
    setCategory(res.data.results);
  }, "No categories found.");

  useEffect(() => {
    fetchList();
  }, []);
  
  const [fetchBooks, loaded, error] = Fetching(async () => {
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
        <Autocomplete 
          sx={{ backgroundColor: "white", width: "70%", margin: "auto" }}
          options={category.map(el => el.list_name)}
          renderInput={(params) => <TextField {...params} label="Category" />}
          onInputChange={(event, newInputValue) => {
            setList(newInputValue);
          }}
        />
        <button id="search-btn" onClick={() => {
          setListEntered(list);
        }}>Search</button>
      </div>
      {error && <h3 className="info">{error}</h3>}
      {!error && <h3 className="info">Category: {listEntered}</h3>}
      {!loaded &&
        <div style={{display: "flex", justifyContent: "center", margin: 50}}><Loader/></div> 
      }
      {loaded && !error && 
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