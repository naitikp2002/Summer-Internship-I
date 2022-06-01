import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Data from "./Table";


const baseURL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const handlechange = (event) => {
    setSData(event.target.value);
  };
  const getcol = (val) => {
    setStypeData(val.target.value);
  };

  const [data, setData] = useState([]);
  const [sdata, setSData] = useState("");
  const [stypedata, setStypeData] = useState("id");

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <div className="App">
      <div className="inp">
          <select onChange={(e)=>getcol(e)} value={stypedata}>
            <option value="id">id</option>
            <option value="name">name</option>
            <option value="email">email</option>
            <option value="address">address</option>
            <option value="phone">phone</option>
            <option value="website">website</option>
            <option value="company">company</option>
          </select>
        <input placeholder={`Enter ${stypedata}`} onChange={handlechange} />
      </div>
      <Data data={data} sdata={sdata} fname={stypedata}/>
    </div>
  );
}

export default App;
