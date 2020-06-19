import React from "react";
import "./style.css";

function Col(props) {
  return (
    <div className= "col-md-6"> {props.children}
    </div>
  );

}

export default Col;