import { Navigate, Route, Routes } from "react-router";
import AuthorsList from "./pages/AuthorsList";
import BooksList from "./pages/BooksList";
import Footer from "./Footer";
import Header from "./Header";
import HomePage from "./pages/HomePage";
import Suggestions from "./pages/Suggestions";

const MainComponent = () => {
  const apiKey = 'aERWlm0UJQufUiGd3ILBOqkWlqQR41YI';

  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path="/home" element={<HomePage/>}/>
        <Route exact path="/books" element={<BooksList apiKey={apiKey}/>}/>
        <Route exact path="/authors" element={<AuthorsList/>}/>
        <Route exact path="/suggestions" element={<Suggestions apiKey={apiKey}/>}/>
        <Route path="*" element={<Navigate replace to="/home" />}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default MainComponent;