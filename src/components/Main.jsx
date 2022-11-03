import { Navigate, Route, Routes } from "react-router";
import AuthorsList from "./AuthorsList";
import BooksList from "./BooksList";
import Footer from "./Footer";
import Header from "./Header";
import HomePage from "./HomePage";
import Suggestions from "./Suggestions";
import { books } from "../data/books";

const MainComponent = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path="/home" element={<HomePage/>}/>
        <Route exact path="/books" element={<BooksList books={books}/>}/>
        <Route exact path="/authors" element={<AuthorsList/>}/>
        <Route exact path="/suggestions" element={<Suggestions/>}/>
        <Route path="*" element={<Navigate replace to="/home" />}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default MainComponent;