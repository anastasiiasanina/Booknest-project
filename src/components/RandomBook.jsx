import { useState, useEffect } from "react";
import { Fetching } from "../helpers/fetch";
import ListService from "../API/ListService";
import BookService from "../API/BookService";
import ShowRandom from "./ShowRandom";

const RandomBook = ({apiKey}) => {
  const [randomList, setRandomList] = useState();
  const [randomBook, setRandomBook] = useState();
  const [list, setList] = useState([]);
  const [height, setHeight] = useState("65vh");

  const getRandomId = (max) => {
    return Math.floor(Math.random() * max);
  }

  const [fetchList, loadedList, errorList] = Fetching(async () => {
    const res = await ListService.getList(apiKey);
    setList(res.data.results);
  }, "No categories found.");

  const [fetchBooks, loadedBook, errorBook] = Fetching(async () => {
    const res = await BookService.getBooks(apiKey, randomList);
    let bookId = getRandomId(res.data.results.books.length);
    setHeight();
    setRandomBook(res.data.results.books[bookId]);
  }, "No category with this name");

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
    <div id="random" style={{height: height}} className='random-book'>
      <div style={{margin: "auto"}}>
        {errorList && <h3 className="info">{errorList}</h3>}
        {errorBook && <h3 className="info">{errorBook}</h3>}
        <ShowRandom loadedBook={loadedBook} loadedList={loadedList} handleClick={handleClick} randomBook={randomBook}/>
      </div>
    </div>
  )
}

export default RandomBook;