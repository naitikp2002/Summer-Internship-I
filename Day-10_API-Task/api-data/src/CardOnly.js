import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const baseURL = "https://jsonplaceholder.typicode.com/users";

function CardOnly() {
    const [data, setData] = useState([]);
    const params= useParams();
    const {id}= params();
    console.warn(id);
    useEffect(() => {
        axios.get(baseURL).then((response) => {
          setData(response.data);
        });
      }, []);
  return (
    <div className='CardApp'>
     {id}
    </div>
  )
}

export default CardOnly