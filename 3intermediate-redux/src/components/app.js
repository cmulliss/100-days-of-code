import React, { Component } from "react";

// components
import Search from "../containers/search";
import ListOfCars from "../containers/list_of_cars";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Search />
        <ListOfCars />
      </div>
    );
  }
}

export default App;

/* 
parent component
*/
