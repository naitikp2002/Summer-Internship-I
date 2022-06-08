import './App.css';
import React from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className='App'>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input {...register('firstName')} /><br/>
      <label>Last Name</label>
      <input {...register('lastName', { required: true })} />
      {errors.lastName && <p>Last name is required.</p>}<br/>
      <label>Age</label>
      <input {...register('age', { pattern: /\d+/ })} />
      {errors.age && <p>Please enter number for age.</p>}<br/>
      <input type="submit" />
    </form>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <label>Name: </label>
//       <input type={"text"}/>
//       <br/>

//       <label>Email: </label>
//       <input type={"text"}/>
//       <br/>
//       <label>Phone: </label>
//       <input type={"text"}/>
//       <br/>
//       <label>age: </label>
//       <input type={"text"}/>
//       <br/>
//       <button type="submit">Submit</button>
//     </div>
//   );
// }

export default App;
