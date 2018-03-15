import React, { PureComponent } from "react";
// react is going to do everything in steps
// 1. get default props from ReactRouter
class Life extends PureComponent {
  // 2. set default state
  state = {
    title: "Life Cycles"
  };
  /* shouldComponentUpdate(nextProps, nextState) {
    // new state is nexState & this.state.title
    // is original state.but not efficient
    // but use pure components instead
    if (nextState.title === this.state.title) {
      return false;
    }
    return true;
  } */
  render() {
    console.log("render");
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
}
export default Life;
/* pure compoenents, need to understand which
problems pure components solve. Re renders despite
same value for title, this is the problem. With
pure components we can detect if the state changes, 
wull rerender, if not will not rerender. Could
do this with shouldCompoentUpdate, manually
PureComponent checks state, so don't need 
shouldComponentUpdate, to prevent rerendering. Why 
reload the whold app, if state is the same?
*/
