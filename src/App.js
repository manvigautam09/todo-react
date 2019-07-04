import React, { Component } from "react";
import Header from "./Components/header";
import Container from "./Components/container";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container />
      </div>
    );
  }
}

export default App;
