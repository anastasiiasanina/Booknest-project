import { Navigate, Route, Routes } from "react-router";
import AuthorsList from "./AuthorsList";
import BooksList from "./BooksList";
import Footer from "./Footer";
import Header from "./Header";
import HomePage from "./HomePage";

const MainComponent = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path="/home" element={<HomePage/>}/>
        <Route exact path="/books" element={<BooksList/>}/>
        <Route exact path="/authors" element={<AuthorsList/>}/>
        <Route path="*" element={<Navigate replace to="/home" />}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default MainComponent;