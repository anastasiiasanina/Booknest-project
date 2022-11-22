import { useState, useEffect } from "react";
import { Fetching } from "../helpers/fetch";
import ListService from "../API/ListService";
import Loader from "./Loader";

const RandomBook = ({apiKey}) => {
  const [randomList, setRandomList] = useState();
  const [randomBook, setRandomBook] = useState();
  const [clicked, setClicked] = useState(false);
  const [list, setList] = useState([]);

  const [fetchList, loaded, error] = Fetching(async () => {
    const res = await ListService.getList(apiKey);
    setList(res.data.results);
  }, "No categories found.");

  const getRandomId = (max) => {
    return Math.floor(Math.random() * max);
  }

  const handleClick = () => {
    let listId = getRandomId(list.length);
    setRandomList(list[listId].list_name_encoded);
    console.log(randomList);
    console.log(list[listId].list_name_encoded);
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div style={{margin: "auto"}}>
      {!loaded &&
        <div style={{display: "flex", justifyContent: "center", margin: 50}}><Loader/></div> 
      }
      {loaded &&
        <span onClick={handleClick} className="main-btn">Find book</span>
      }
    </div>
  )
}

export default RandomBook;