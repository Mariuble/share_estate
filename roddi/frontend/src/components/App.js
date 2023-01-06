import React, { Component } from "react";
import { render } from "react-dom";
import Home from "./Home";
import Header from "./Header";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
