// Import the React and React-DOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a React Component
const App = function() {
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" />
      <button
        style={{
          backgroundColor: "blue",
          color: "white"
        }}
      >
        Submit
      </button>
    </div>
  );
};

// Take the RC and show it
ReactDOM.render(<App />, document.querySelector("#root"));
