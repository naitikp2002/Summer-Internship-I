import React from 'react'
import "./App.css";
import Table from 'react-bootstrap/Table'

function Data({data,sdata,fname}) {
  return (
    <div className='Table'>
    <Table striped bordered hover size="sm">
    <thead>
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
    </thead>
    <tbody>

    {(() => {
        switch (fname) {
          case 'id':
            return  (data.filter((val)=>{
              if(sdata === ""){
              return val
              }
              else if((val.id.toString().includes(sdata)))
              {
                  return val;
              }
              return false
            }).map((items, key) => {
              return <tr>
                <td>{items.id}</td>
                <td>{items.name}</td>
                <td>{items.username}</td>
                <td>{items.email}</td>
                <td>{items.address.street}, {items.address.suite}, {items.address.city}, {items.address.zipcode}</td>
                <td>{items.phone}</td>
                <td>{items.website}</td>
                <td>{items.company.name} {items.company.chatchPhrase} {items.company.bs}</td>
                </tr>;
            }))

          case 'name':
            return  (data.filter((val)=>{
              if(sdata === ""){
              return val
              }
              else if((val.name.toString().includes(sdata)))
              {
                  return val;
              }
              return false
            }).map((items, key) => {
              return <tr>
                <td>{items.id}</td>
                <td>{items.name}</td>
                <td>{items.username}</td>
                <td>{items.email}</td>
                <td>{items.address.street}, {items.address.suite}, {items.address.city}, {items.address.zipcode}</td>
                <td>{items.phone}</td>
                <td>{items.website}</td>
                <td>{items.company.name} {items.company.chatchPhrase} {items.company.bs}</td>
                </tr>;
            }))
          case 'username':
            return  (data.filter((val)=>{
              if(sdata === ""){
              return val
              }
              else if((val.username.toString().includes(sdata)))
              {
                  return val;
              }
              return false
            }).map((items, key) => {
              return <tr>
                <td>{items.id}</td>
                <td>{items.name}</td>
                <td>{items.username}</td>
                <td>{items.email}</td>
                <td>{items.address.street}, {items.address.suite}, {items.address.city}, {items.address.zipcode}</td>
                <td>{items.phone}</td>
                <td>{items.website}</td>
                <td>{items.company.name} {items.company.chatchPhrase} {items.company.bs}</td>
                </tr>;
            }))
          case 'address':
            return  (data.filter((val)=>{
              if(sdata === ""){
              return val
              }
              else if((val.address.street.toString().includes(sdata)) || (val.address.zipcode.toString().includes(sdata)) || (val.address.city.toString().includes(sdata)) || (val.address.suite.toString().includes(sdata)))
              {
                  return val;
              }
              return false
            }).map((items, key) => {
              return <tr>
                <td>{items.id}</td>
                <td>{items.name}</td>
                <td>{items.username}</td>
                <td>{items.email}</td>
                <td>{items.address.street}, {items.address.suite}, {items.address.city}, {items.address.zipcode}</td>
                <td>{items.phone}</td>
                <td>{items.website}</td>
                <td>{items.company.name} {items.company.chatchPhrase} {items.company.bs}</td>
                </tr>;
            }))
            case 'email':
              return  (data.filter((val)=>{
                if(sdata === ""){
                return val
                }
                else if((val.email.toString().includes(sdata)))
                {
                    return val;
                }
                return false
              }).map((items, key) => {
                return <tr>
                  <td>{items.id}</td>
                  <td>{items.name}</td>
                  <td>{items.username}</td>
                  <td>{items.email}</td>
                  <td>{items.address.street}, {items.address.suite}, {items.address.city}, {items.address.zipcode}</td>
                  <td>{items.phone}</td>
                  <td>{items.website}</td>
                  <td>{items.company.name} {items.company.chatchPhrase} {items.company.bs}</td>
                  </tr>;
              }))
           case 'phone':
            return  (data.filter((val)=>{
              if(sdata === ""){
              return val
              }
              else if((val.phone.toString().includes(sdata)))
              {
                  return val;
              }
              return false
            }).map((items, key) => {
              return <tr>
                <td>{items.id}</td>
                <td>{items.name}</td>
                <td>{items.username}</td>
                <td>{items.email}</td>
                <td>{items.address.street}, {items.address.suite}, {items.address.city}, {items.address.zipcode}</td>
                <td>{items.phone}</td>
                <td>{items.website}</td>
                <td>{items.company.name} {items.company.chatchPhrase} {items.company.bs}</td>
                </tr>;
            }))
            case 'website':
              return  (data.filter((val)=>{
                if(sdata === ""){
                return val
                }
                else if((val.website.toString().includes(sdata)))
                {
                    return val;
                }
                return false
              }).map((items, key) => {
                return <tr>
                  <td>{items.id}</td>
                  <td>{items.name}</td>
                  <td>{items.username}</td>
                  <td>{items.email}</td>
                  <td>{items.address.street}, {items.address.suite}, {items.address.city}, {items.address.zipcode}</td>
                  <td>{items.phone}</td>
                  <td>{items.website}</td>
                  <td>{items.company.name} {items.company.chatchPhrase} {items.company.bs}</td>
                  </tr>;
              }))
              case 'company':
                return  (data.filter((val)=>{
                  if(sdata === ""){
                  return val
                  }
                  else if((val.company.name.toString().includes(sdata))|| (val.company.bs.toString().includes(sdata))|| (val.company.chatchPhrase.toString().includes(sdata)) )
                  {
                      return val;
                  }
                  return false
                }).map((items, key) => {
                  return <tr>
                    <td>{items.id}</td>
                    <td>{items.name}</td>
                    <td>{items.username}</td>
                    <td>{items.email}</td>
                    <td>{items.address.street}, {items.address.suite}, {items.address.city}, {items.address.zipcode}</td>
                    <td>{items.phone}</td>
                    <td>{items.website}</td>
                    <td>{items.company.name} {items.company.chatchPhrase} {items.company.bs}</td>
                    </tr>;
                }))
            default:
            return null
        }
      })()}

  </tbody>
  </Table></div>
  )
}

export default Data
