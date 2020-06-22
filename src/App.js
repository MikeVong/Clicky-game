import React, { Component } from "react";
import './App.css';
import NavBar from "./components/NavBar";
import Col from "./components/Col";
import Game from "./components/Game";
import Row from "./components/Row";
import ScoreInfo from "./components/ScoreInfo";
import squares from "./squares.json";




class App extends Component {

  state = {
    score: 0,
    topScore : 0,
    squares,
    message : "Click on square to start!"
  };

  handleClick =(id, clicked) => {
    const one = this.state.squares
  
    if(clicked){
        one.forEach((squares,index) =>{
          one[index].clicked = false;
        });
        return this.setState({
          squares: one.sort(() => Math.random() - 0.5),
          score: 0,
          message: "Wrong! Please Try again!"
        })
      }
    else{
        one.forEach((squares,index) =>{
            if(id === squares.id){
              one[index].clicked =true;
            }
        })
    
    const {topScore, score} = this.state;
    const newScore = score + 1;
    const newTopScore = newScore > topScore ? newScore : topScore;
    
    return this.setState({
        squares: one.sort(() => Math.random() - 0.5),
        score: newScore,
        topScore: newTopScore,
        message: "Correct! Continue!"
    })
          
  }   
     
  };

render() {
  return (
    <div>
      <NavBar />
      <Row>
      <Col>
      <Row>
      {this.state.squares.map(square => (
        <Game name={square.name} 
          image={square.image}
          key={square.id}
          id={square.id}
          handleClick={this.handleClick}
          clicked ={square.clicked} />  
        ))}
      </Row>
      </Col>
      <Col> 
      <ScoreInfo  message={this.state.message} 
                  score = {this.state.score} 
                  topScore = {this.state.topScore}/>
       </Col>
      </Row>
      
      
      
      
      

    </div>
    
    
  )};
}


export default App;
