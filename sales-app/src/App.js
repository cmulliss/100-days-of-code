import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CourseSales from './Course-sales';

class App extends Component {
  render() {
      let courses = [
          {name: 'Course 1, price 199'},
          {name: 'Course 2, price 150'},
          {name: 'Course 3, price 90'},
          {name: 'Course 4, price 210'}
      ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Course Sales App</h1>
        </header>
        <p className="App-intro">
        </p>
        <CourseSales items={courses}/>
      </div>
    );
  }
}


export default App;
