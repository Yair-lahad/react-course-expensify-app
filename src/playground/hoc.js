// Higher Order Component (hoc) - A component that renders another component
//Reuse code
import React from "react";
import ReactDOM from "react-dom";
const Info = (props) => (
  <div>
    <h1> Info</h1>
    <p> The info is : {props.info} </p>
  </div>
);
ReactDOM.render(
  <Info info="this are the details" />,
  document.getElementById("app")
);
