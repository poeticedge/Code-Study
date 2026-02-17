import React from "react";
import ReactDOM from "react-dom";
import searchMovies from "./searchMovies";

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <div>
          <h1 className="title">Movie Search App</h1>
          {searchMovies()}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
