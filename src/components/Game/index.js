import React from "react";
import "./style.css";

function Game() {
  return (
    <div className="jumbotron" id="jumbo">
      <div className="container-fluid justify-content" id="game">
      <div className="row">
      <img src="https://picsum.photos/150" alt="..." className="img-thumbnail"></img>
      <img src="https://picsum.photos/150" alt="..." className="img-thumbnail"></img>
      <img src="https://picsum.photos/150" alt="..." className="img-thumbnail"></img>
      </div>
      <div className="row">
      <img src="https://picsum.photos/150" alt="..." className="img-thumbnail"></img>
      <img src="https://picsum.photos/150" alt="..." className="img-thumbnail"></img>
      <img src="https://picsum.photos/150" alt="..." className="img-thumbnail"></img>
      </div>
      <div className="row">
      <img src="https://picsum.photos/150" alt="..." className="img-thumbnail"></img>
      <img src="https://picsum.photos/150" alt="..." className="img-thumbnail"></img>
      <img src="https://picsum.photos/150" alt="..." className="img-thumbnail"></img>
      </div>
    </div>
    </div>

    
  );
}

export default Game;