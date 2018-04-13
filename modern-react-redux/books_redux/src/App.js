import React, { Component } from "react";
import BookList from "./containers/book_list";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Redux Books</h1>
        <BookList />
      </div>
    );
  }
}

export default App;
