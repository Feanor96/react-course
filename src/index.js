import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return <h1>This is my greeting</h1>
}

ReactDOM.render(<Greeting />, document.getElementById("root"))