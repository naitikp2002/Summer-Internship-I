import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Table from "./Table";

const baseURL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const handleclick = () => {};
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <div className="App">
      <Table data={data}/>
    </div>
  );
}

export default App;
