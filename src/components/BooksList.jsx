import BooksItem from "./BooksItem";
import '../style/BooksList.css';
import { useState, useEffect } from "react";
import axios from "axios";

const BooksList = ({apiKey}) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get(
        `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apiKey}`
      )
      setBooks(res.data.results.books)
      console.log(res.data.results.books)
    }
  
    fetchBooks()
  }, []);

  return (
    <div id="list">
      {books.map((el, index) => 
        <BooksItem book={el} number={index++} key={index}/>
      )}
    </div>
  )
}

export default BooksList;