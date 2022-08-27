import React from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [currentTime, newTime] = React.useState(time);

  function getTime() {
    const now = new Date().toLocaleTimeString();
    newTime(now);
  }
  setInterval(getTime, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={getTime}>Digital Clock</button>
    </div>
  );
}

export default App;
