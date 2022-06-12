import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/users";

function Card() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setData(response.data);
      console.log(data);
    });
  }, []);
  return (
    <>
      <div className="CardApp">
        {data.map((val, key, index) => {
          return (
            <div className="cards" key={val.id}>
              <h5>
                {" "}
                <b>ID: {val.id} </b>
              </h5>
              <u>Name:</u> {val.name}
              <br />
              <u>Username:</u> {val.username}
              <br />
              <u>Website:</u> {val.website}
              <br />
              <u>Email:</u> {val.email}
              <br />
              <u>Address:</u> {val.address.street} {val.address.suite}{" "}
              {val.address.city} {val.address.zipcode}
              <br />
              <u>Phone:</u> {val.phone}
              <br />
              {/* <Link to={`/card/${val.id}`}>View</Link> */}
            </div>
          );
        })}
      </div>
      {/* <div className="CardApp">
        <div className="cards">
          <h5>
            <b>ID: {data[2].id} </b>
          </h5>
          <u>Name:</u> {data.name[2]}
          <br />
          <u>Username:</u> {data.username[2]}
          <br />
          <u>Website:</u> {data.website[2]}
          <br />
          <u>Email:</u> {data.email[2]}
          <br />
          <u>Address:</u> {data.address.street[2]} {data.address.suite[2]}{" "}
          {data.address.city[2]} {data.address.zipcode[2]}
          <br />
          <u>Phone:</u> {data.phone[2]}
          <br />
        </div>
      </div> */}
    </>
  );
}

export default Card;
