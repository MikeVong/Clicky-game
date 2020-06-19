import React, { Component } from "react";
import './App.css';
import NavBar from "./components/NavBar";
import Col from "./components/Col";
import Jumbotron from "./components/Jumbotron";
import Game from "./components/Game";
import Row from "./components/Row";

class App extends Component {

  state = {
    score,
    topScore,
    square
  };


render() {
  return (
    <div>
      <NavBar />
      <Row>
      <Col>
      <Game /> 
      </Col>
      <Col>
      <Jumbotron />
      </Col>
      </Row>
      
      
      
      
      

    </div>
    
    
  )};
}


export default App;
