import React from "react"
import './App.css';
import {Button} from "reactstrap";
import {ToastContainer, toast} from "react-toastify"
import Home from "./components/Home";
import Food from "./components/Food.js";
function App() {
  const btnHandle = () =>{
    toast("welcome");
  };

  return (
  <div> 
    <Home/>
    <hr/>
    <Food/>
  </div>
  );
}

export default App;
