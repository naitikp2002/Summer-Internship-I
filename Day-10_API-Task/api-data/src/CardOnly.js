import React from 'react'
import { useEffect,useState } from 'react';
import { useParams,useLocation } from 'react-router-dom';
import axios from 'axios';
import "./App.css";

const baseURL = "https://jsonplaceholder.typicode.com/users";

function CardOnly() {
    const [data, setData] = useState([]);
const {id} = useParams();
const location = useLocation()
// console.log(location.pathname,"pathname")
console.log(id)
    // useEffect(() => {
    //     axios.get(baseURL).then((response) => {
    //       setData(response.data);
    //       console.log(response)
    //     });
    //   }, []);
  return (
    <div className='CardApp'> 
     {/* <div className='cards'>
           <h5><b>ID: {data[2].id} </b></h5>
           <u>Name:</u>  {data.name[2]}<br/>
           <u>Username:</u>  {data.username[2]}<br/>
           <u>Website:</u>  {data.website[2]}<br/>
           <u>Email:</u>  {data.email[2]}<br/>
           <u>Address:</u>  {data.address.street[2]} {data.address.suite[2]} {data.address.city[2]} {data.address.zipcode[2]}<br/>
           <u>Phone:</u>  {data.phone[2]}<br/>
     </div> */}
    </div>
  )
}

export default CardOnly