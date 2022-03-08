import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {ProductList} from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import {Navbar} from "./components/Navbar";
import {Steps} from "./components/Steps/Steps.js";
import {Result} from "./pages/Result.js";
import {Homepage} from "./pages/Homepage/Homepage.js";
import {History} from "./pages/History.js"
 
function App() {

  const [res,setRes]= useState(0);
  const sendToResult =(param)=>{
    setRes(param)
  }
  
  return (
    <Router>
    <Navbar/>
    <div className="container-fluid px-0">
          <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/calculation" element={<Steps sendToResult={sendToResult}/>}/>
            <Route path={`/result/:id`} element={<Result resUrl={res} />}/>
            <Route path="/history" element={<History sendToResult={sendToResult}/>}/>
            <Route path="/list" element={<ProductList/>}/>
            <Route path="/add" element={<AddProduct/>}/>
            <Route path="/edit/:id" element={<EditProduct/>}/>
          </Routes>
    </div>
    </Router>
  );
}
 
export default App;