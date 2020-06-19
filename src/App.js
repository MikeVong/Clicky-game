import React, { Component } from "react";
import './App.css';
import NavBar from "./components/NavBar";
import Col from "./components/Col";
import Jumbotron from "./components/Jumbotron";
import Game from "./components/Game";
import Row from "./components/Row";
import ScoreInfo from "./components/ScoreInfo";
import squares from "./squares.json";

let score =0;
let topScore =0;


class App extends Component {

  state = {
    score,
    topScore,
    squares
  };

  highScore = () => {
    if(this.state.score > this.state.topScore){
      this.setState({topScore: this.state.score})
    }
  }

  clicked = id => {

    if(id !== this.state.squares.id){
       this.state.squares.sort(() => Math.random() - 0.5);
      score++
      this.setState({squares,score})
    }else{
      this.highScore();
    }
          
        } 
     


render() {
  return (
    <div>
      <NavBar />
      <Row>
      <Col> 
      <Jumbotron>
        
        {this.state.squares.map(square => (
          
         <Game name={square.name} 
          image={square.image}
          key={square.id}
          id={square.id}
          clicked ={this.clicked}
           /> 
          
        ))}
        
      </Jumbotron>
      </Col>
      <Col> <Jumbotron>
      <ScoreInfo score = {this.state.score} topScore = {this.state.topScore}/>
      </Jumbotron> </Col>
      </Row>
      
      
      
      
      

    </div>
    
    
  )};
}


export default App;
