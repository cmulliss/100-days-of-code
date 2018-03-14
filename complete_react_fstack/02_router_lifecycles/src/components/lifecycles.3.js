import React, { Component } from "react";
// react is going to do everything in steps
// 1. get default props from ReactRouter
class Life extends Component {
  // 2. set default state
  state = {
    title: "Life Cycles"
  };
  // 3. before render
  componentWillMount() {
    console.log("before render, componentWillMount");
  }
  // 4. render jsx
  render() {
    console.log("RENDER");
    console.log(this.props);
    return (
      <div>
        <h3>{this.state.title}</h3>
      </div>
    );
  }
  //5. after render, after jsx
  componentDidMount() {
    console.log("after render, componentDidMount");
    document.querySelector("h3").style.color = "red";
  }
}
export default Life;
/*  document.querySelector('h3').style.color = 'red'
render is a default method from react
so, before render can use built in method
componentWillMount() gets called before render
lifecycles run by default 
PureComponent is checking state, unless a real
change inside state will do nothing.
*/
