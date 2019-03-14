// Import the React and React-DOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a React Component
const App = function() {
  const labelText = "Enter Name:",
    buttonText = { text: "Click Me!" },
    style = {
      backgroundColor: "blue",
      color: "white"
    };

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" />
      <button style={style}>{buttonText.text}</button>
    </div>
  );
};

// Take the RC and show it
ReactDOM.render(<App />, document.querySelector("#root"));
