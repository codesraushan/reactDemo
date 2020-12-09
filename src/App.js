import React from "react"
import './App.css';
import {Button, Container, Row, Col} from "reactstrap";
import {ToastContainer, toast} from "react-toastify"
import Home from "./components/Home";
//import Food from "./components/Food.js";
import AllFood from "./components/AllFoods";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { BrowserRouter as  Router, Route } from "react-router-dom";
import FoodTable from "./components/FoodTable";
function App() {
  const btnHandle = () =>{
    toast("welcome");
  };

  return (
  <div> 
    <Router>
   
    <ToastContainer/>
    <Header/>
    <Container>
      <Row>
        <Col md = {3}>
          <Menu/>
        </Col>
        <Col md = {9}>
          <Route path="/" component={Home} exact/>
          <Route path="/breakfast" component={FoodTable} exact/>
          <Route path="/lunch" component={FoodTable} exact/>
          <Route path="/snacks" component={FoodTable} exact/>
          <Route path="/dinner" component={FoodTable} exact/>
          
          
          
        </Col>
      </Row>

    </Container>
       
    </Router>
  </div>
  );
}

export default App;
