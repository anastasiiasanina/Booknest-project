import { useState, useEffect } from "react";
import ListService from "../../API/ListService";
import '../../style/Suggestions.css';
import Loader from "../Loader";
import { Fetching } from "../../helpers/fetch";
import {Link} from 'react-router-dom';

const Suggestions = ({apiKey, setListEntered}) => {
  const [list, setList] = useState([]);
  const [height, setHeight] = useState("65vh");

  const [fetchList, loaded, error] = Fetching(async () => {
    const res = await ListService.getList(apiKey);
    setList(res.data.results);
    setHeight("");
  }, "No categories found.");

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div style={{height: height}} className="main-block">
      <h3 className="info">Explore categories of New York Times bestsellers</h3> <br/>
      {error && <h3 className="info">{error}</h3>}
      {!loaded &&
        <div style={{display: "flex", justifyContent: "center", margin: 50}}><Loader/></div> 
      }
      <div className="list">
        {list.map(el => 
        <Link style={{textDecoration: 'none'}} to='/books'><p onClick={() => setListEntered(el.list_name)} className="list-name">{el.list_name}</p></Link>
        )}
      </div>
    </div>
  )
}

export default Suggestions;