import React from "react";
import "./style.css";

function Game(props) {
  return (
    <div className="card col-md-3" key={props.id} onClick={() => props.handleClick(props.id,props.clicked)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} id={props.name}/>
      </div>
    </div>
    
  );
}

export default Game;