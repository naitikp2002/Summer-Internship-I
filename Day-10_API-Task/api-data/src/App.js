import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Table from "./Table";

const baseURL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const handlechange = (event) => {
    setSData(event.target.value);
  };
  const [data, setData] = useState([]);
  const [sdata, setSData] = useState("");

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <div className="App">
      <div className="inp">
      <input placeholder="Search name" onChange={handlechange}/>
      </div>
      <Table data={data} sdata={sdata}/>
    </div>
  );
}

export default App;
