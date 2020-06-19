import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div className="jumbotron"id="jumbo">
      <div className="container">
        <h1 className="display-4 text-center">Clicky Game</h1>
        <hr></hr>
        <h2>Score: {props.Score}</h2>
        <hr></hr>
        <h2>Top Score: {props.TopScore}</h2>
    </div>
    </div>
  );
}

export default Jumbotron;