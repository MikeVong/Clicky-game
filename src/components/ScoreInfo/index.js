import React from "react";
import "./style.css";

function ScoreInfo(props) {
  return (
      <div className="container">
        <h1 className="display-4 text-center">Clicky Game</h1>
        <hr></hr>
        <h2>Score: {props.score}</h2>
        <hr></hr>
        <h2>Top Score: {props.topScore}</h2>
      </div>
  );
}

export default ScoreInfo;