import { Navigate, Route, Routes } from "react-router";
import AuthorsList from "./pages/AuthorsList";
import BooksList from "./pages/BooksList";
import Footer from "./Footer";
import Header from "./Header";
import HomePage from "./pages/HomePage";
import Suggestions from "./pages/Suggestions";
import { useState } from "react";

const MainComponent = () => {
  const apiKey = 'aERWlm0UJQufUiGd3ILBOqkWlqQR41YI';
  const [listEntered, setListEntered] = useState('Hardcover fiction');

  return (
    <div>
      <Header setListEntered={setListEntered}/>
      <Routes>
        <Route exact path="/home" element={<HomePage apiKey={apiKey}/>}/>
        <Route exact path="/books" element={<BooksList apiKey={apiKey} listEntered={listEntered} setListEntered={setListEntered}/>}/>
        <Route exact path="/authors" element={<AuthorsList apiKey={apiKey}/>}/>
        <Route exact path="/suggestions" element={<Suggestions apiKey={apiKey} setListEntered={setListEntered}/>}/>
        <Route path="*" element={<Navigate replace to="/home"/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default MainComponent;