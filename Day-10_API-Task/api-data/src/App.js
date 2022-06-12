import "./App.css";
import DataFile from "./DataFile";
import NavBar from "./NavBar";
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Home from "./Home";
import Card from "./Card";
import CardOnly from "./CardOnly";

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/> 
      <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/data" element={<DataFile/>}/>  
              <Route path="/card" element={<Card/>}/>
              <Route path="/card/:id" element={<CardOnly/>}/>   
      </Routes>
    {/* <DataFile/> */}
    </BrowserRouter>
    </div>
  );
}

export default App;
