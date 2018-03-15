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
  componentWillUpdate() {
    console.log("before update, componentWillUpdate");
  }
  componentDidUpdate() {
    console.log("after update, componentDidUpdate");
  }
  /* more confusing, receives 2 arguments will return 
  true or false.  whenever we make an update on our app, 
  it Will be checking the next state of props, or the 
  next state of state. Can check previous and next state, 
  and if don't want something to happen can use false, 
  so does not update the render. Will have the new value 
  of state. */
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState);
    console.log(nextProps);
    if (nextState.title === "new title") {
      return false;
    }

    return true;
  }
  /* will be listening for new props, receiving props 
  from react router.  */
  componentWillReceiveProps() {
    console.log("before receiving props");
  }
  /* unmounting the live component, mounting another */
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  // 4. render jsx
  render() {
    console.log("RENDER");
    console.log(this.props);
    return (
      <div>
        <h3>{this.state.title}</h3>
        <button
          onClick={() =>
            this.setState({
              title: "new title"
            })
          }
        >
          Click to change
        </button>
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
