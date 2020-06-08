import React, { Component } from "react";
import "../css/notFound.css";

class NotFound extends Component {
  // 404, WHAT DID YOU EXPECT?
  render() {
    return (
      <div className="not-cont">
        <p className="not-mess">
          Er is iets mis gegaan bij het laden van deze pagina: probeer iets
          anders.
        </p>
        <div className="not-cont-in">
          <h1 className="not-404">ERROR: 404</h1>
        </div>
      </div>
    );
  }
}

export default NotFound;
