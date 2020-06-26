import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <label htmlFor="bar">bar</label>
        <input
          type="text"
          onChange={() => {
            console.log("コメント出てくる");
          }}
        />
      </div>
    );
  }
}

// functionで定義する場合。あまり好きじゃない
// const App = () => {
//   return <div>hello</div>;
// };

export default App;
