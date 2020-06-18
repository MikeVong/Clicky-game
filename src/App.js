import React, { Component } from "react";
import './App.css';
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Game from "./components/Game";

class App extends Component {

  state = {
    
  };


render() {
  return (
    <Wrapper>
      <NavBar />
      <Jumbotron />
      <Game />

    </Wrapper>
    
    
  )};
}


export default App;
