import React from "react";
import "./style.css";

function NavBar() {
  return (
<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="/">Clicky Game</a>
    </div>
    <div className="navbar-header">
      <h3 className="navbar-brand">Click on the image to start</h3>
    </div>
    <div className="navbar-header">
      <h3 className="navbar-brand">Score: 0 | Top Score: 0</h3>
    </div>
  </div>
</nav>

  );
}

export default NavBar;