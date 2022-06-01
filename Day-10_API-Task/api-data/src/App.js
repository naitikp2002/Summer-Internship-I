import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Data from "./Table";
import { Dropdown } from "react-bootstrap";

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
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select Item
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">id</Dropdown.Item>
          <Dropdown.Item href="#/action-2">name</Dropdown.Item>
          <Dropdown.Item href="#/action-3">username</Dropdown.Item>
          <Dropdown.Item href="#/action-1">email</Dropdown.Item>
          <Dropdown.Item href="#/action-2">address</Dropdown.Item>
          <Dropdown.Item href="#/action-3">phone</Dropdown.Item>
          <Dropdown.Item href="#/action-1">website</Dropdown.Item>
          <Dropdown.Item href="#/action-2">company</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        <input placeholder="Search name" onChange={handlechange} />
      </div>
      <Data data={data} sdata={sdata} />
    </div>
  );
}

export default App;
