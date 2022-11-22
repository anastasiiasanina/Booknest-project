import { useState, useEffect } from "react";
import { Fetching } from "../helpers/fetch";
import ListService from "../API/ListService";
import Loader from "./Loader";
import BookService from "../API/BookService";

const RandomBook = ({apiKey}) => {
  const [randomList, setRandomList] = useState();
  const [randomBook, setRandomBook] = useState();
  const [clicked, setClicked] = useState(false);
  const [list, setList] = useState([]);

  const [fetchList, loadedList, errorList] = Fetching(async () => {
    const res = await ListService.getList(apiKey);
    setList(res.data.results);
    
  }, "No categories found.");

  const [fetchBooks, loadedBook, errorBook] = Fetching(async () => {
    const res = await BookService.getBooks(apiKey, randomList);
    let bookId = getRandomId(res.data.results.books.length);
    setRandomBook(res.data.results.books[bookId]);
  }, "No category with this name");

  const getRandomId = (max) => {
    return Math.floor(Math.random() * max);
  }

  const handleClick = () => {
    let listId = getRandomId(list.length);
    setRandomList(list[listId].list_name_encoded);
  }

  useEffect(() => {
    if(randomList) fetchBooks();
  }, [randomList]);

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div style={{margin: "auto"}}>
      {!loadedList &&
        <div style={{display: "flex", justifyContent: "center", margin: 50}}><Loader/></div> 
      }
      {loadedList &&
        <span onClick={handleClick} className="main-btn">Find book</span>
      }
    </div>
  )
}

export default RandomBook;