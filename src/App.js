import React from "react";
import "./styles.css";

function App() {
  let cDate = new Date(2022, 11, 24, 12);
  cDate = cDate.getHours();
  let message = " ";
  const cStyle = {};

  if (cDate >= 5 && cDate < 12) {
    message = "Good Morning";
    cStyle.color = "green";
  } else if (cDate >= 12 && cDate < 18) {
    message = "Good Afternoon";
    cStyle.color = "orange";
  } else if (cDate >= 18 && cDate < 20) {
    message = "Good Evening";
    cStyle.color = "red";
  } else {
    message = "Good Night";
    cStyle.color = "black";
  }

  return (
    <div className="App">
      <h1>
        Hello Sir, <span style={cStyle}>{message}</span>
      </h1>
    </div>
  );
}
export default App;
