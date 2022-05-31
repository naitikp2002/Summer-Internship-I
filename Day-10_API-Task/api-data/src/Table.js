import React from 'react'
import "./App.css";

function Table({data,sdata}) {
  return (
    <div className='Table'><table>
    <tr>
      <th>id</th>
      <th>name</th>
      <th>username</th>
      <th>email</th>
      <th>Address</th>
      <th>phone</th>
      <th>website</th>
      <th>Company</th>
    </tr>
  {data.filter((val)=>{
    if(sdata === ""){
    return val
    }
    else if(val.name.includes(sdata))
    {
        return val;
    }
  }).map((items, key) => {
    return <tr>
      <td>{items.id}</td>
      <td>{items.name}</td>
      <td>{items.username}</td>
      <td>{items.email}</td>
      <td>{items.address.street}, {items.address.suite}, {items.address.city}, {items.address.zipcode}</td>
      <td>{items.phone}</td>
      <td>{items.website}</td>
      <td>{items.company.name}, {items.company.chatchPhrase}, {items.company.bs}</td>
           </tr>;
  })}
  </table></div>
  )
}

export default Table