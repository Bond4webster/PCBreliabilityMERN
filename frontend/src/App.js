import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {ProductList} from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import {Navbar} from "./components/Navbar";
import {Steps} from "./components/Steps/Steps.js";
import {Result} from "./pages/Result.js";
 
function App() {

  const [res,setRes]= useState({});
  const sendToResult =(param)=>{
    setRes({...res,result:param.result})
  }

  return (
    <Router>
    <Navbar/> 
    <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Steps sendToResult={sendToResult}/>}/>
            <Route path="/result" element={<Result result={res.result}/>}/>
            <Route path="/list" element={<ProductList/>}/>
            <Route path="/add" element={<AddProduct/>}/>
            <Route path="/edit/:id" element={<EditProduct/>}/>
          </Routes>
    </div>
    </Router>
  );
}
 
export default App;