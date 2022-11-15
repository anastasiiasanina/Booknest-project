import { useState, useEffect } from "react";
import ListService from "../../API/ListService";
import '../../style/Suggestions.css';
import Loader from "../Loader";

const Suggestions = ({apiKey}) => {
  const [list, setList] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [height, setHeight] = useState("65vh");

  useEffect(() => {
    const fetchList = async () => {
      setLoaded(false);
      const res = await ListService.getList(apiKey);
      setList(res.data.results);
      setLoaded(true);
      setHeight("");
    }
  
    fetchList();
  }, []);

  return (
    <div style={{height: height}} className="suggestions">
      <h3 className="info">Explore categories of New York Times bestsellers</h3>
      {!loaded &&
        <div style={{display: "flex", justifyContent: "center", margin: 50}}><Loader/></div> 
      }
      <div className="list">
        {list.map(el => 
          <p className="list-name">{el.list_name}</p>
        )}
      </div>
    </div>
  )
}

export default Suggestions;
