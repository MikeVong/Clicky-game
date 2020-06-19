import React from "react";
import "./style.css";

function Game(props) {
  return (
    <div className="card" key={props.id} onClick={() => props.clicked(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
    
  );
}

export default Game;