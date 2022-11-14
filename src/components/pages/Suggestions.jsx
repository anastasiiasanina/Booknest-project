import { useState, useEffect } from "react";
import ListService from "../../API/ListService";
import '../../style/Suggestions.css';

const Suggestions = ({apiKey}) => {
  const[list, setList] = useState([]);
  const [loaded, setLoaded] = useState(false);
  //const [stye, setStyle] = useState("65vh");

  useEffect(() => {
    const fetchList = async () => {
      setLoaded(false);
      const res = await ListService.getList(apiKey);
      setList(res.data.results);
      setLoaded(true);
    }
  
    fetchList();
  }, []);

  return (
    <div className="suggestions">
      <h3>Here you can know more about categories of New York Times bestsellers</h3>
      <ul></ul>
    </div>
  )
}

export default Suggestions;
