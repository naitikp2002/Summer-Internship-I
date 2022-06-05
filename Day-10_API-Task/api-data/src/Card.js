import React from 'react'
import "./App.css";
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const baseURL = "https://jsonplaceholder.typicode.com/users";

function Card() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
          setData(response.data);
        });
      }, []);
  return (
    <div className='CardApp'>
       
        {data.map((val,index)=> {
           return ( <div className='cards' key={val.id}>
           <h5> <b>ID: {val.id} </b></h5>
           <u>Name:</u>  {val.name}<br/>
           <u>Username:</u>  {val.username}<br/>
           <u>Website:</u>  {val.website}<br/>
           <u>Email:</u>  {val.email}<br/>
           <u>Address:</u>  {val.address.street} {val.address.suite} {val.address.city} {val.address.zipcode}<br/>
           <u>Phone:</u>  {val.phone}<br/>
           <Link to={`/card/${val.id}`}>View</Link>
          </div>)
        })}
    </div>
  )
}

export default Card