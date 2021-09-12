import * as React from "react";
import Cat from "./components/Cat";
import Dog from "./components/Dog";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div style={{ width: "50%", display: "inline", padding: "20px" }}>
          <Cat />
          <Dog />
        </div>
      </div>
    );
  }
}

export default App;
