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
  const getcol = (val) => {
    setStypeData(val.target.value);
  };

  const [data, setData] = useState([]);
  const [sdata, setSData] = useState("");
  const [stypedata, setStypeData] = useState("");

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <div className="App">
      <div className="inp">
        <div className="select">
          {console.log(stypedata)}
          <select onChange={(e)=>getcol(e)}>
            <option value="id">id</option>
            <option value="name">name</option>
            <option value="email">email</option>
            <option value="address">address</option>
            <option value="phone">phone</option>
            <option value="website">website</option>
            <option value="company">company</option>
          </select>
        </div>
      {/* <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select Item
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">id</Dropdown.Item>
          <Dropdown.Item href="#/action-2">name</Dropdown.Item>
          <Dropdown.Item href="#/action-3">username</Dropdown.Item>
          <Dropdown.Item href="#/action-4">email</Dropdown.Item>
          <Dropdown.Item href="#/action-5">address</Dropdown.Item>
          <Dropdown.Item href="#/action-6">phone</Dropdown.Item>
          <Dropdown.Item href="#/action-7">website</Dropdown.Item>
          <Dropdown.Item href="#/action-8">company</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}
        <input placeholder="Search name" onChange={handlechange} />
      </div>
      <Data data={data} sdata={sdata} fname={stypedata}/>
    </div>
  );
}

export default App;
