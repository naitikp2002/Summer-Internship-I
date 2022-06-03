import "./App.css";
import DataFile from "./DataFile";
import NavBar from "./NavBar";
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Home from "./Home";
function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/> 
      <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/data" element={<DataFile/>}/>           
      </Routes>
    {/* <DataFile/> */}
    </BrowserRouter>
    </div>
  );
}

export default App;
