import React, { PureComponent } from "react";

class Life extends PureComponent {
  // 1 get default props

  // 2 set default state
  state = {
    title: "Life cycles",
    body: "some more text"
  };
  // 3 before render
  componentWillMount() {
    console.log("3 before render, before component gets created");
  }

  // // 5 after render
  // componentDidMount(){
  //     console.log('5 after render')
  //     document.querySelector('h3').style.color = 'red'
  // }

  // componentWillUpdate(){
  //     console.log('BEFORE UPDATE')
  // }

  // componentDidUpdate(){
  //     console.log('AFTER UPDATE')
  // }

  // shouldComponentUpdate(nextProps,nextState){

  //     if(nextState.title === this.state.title){
  //         return false
  //     }

  //     return true;
  // }

  // componentWillReceiveProps(){
  //     console.log('BEFORE RECEIVE PROPS')
  // }

  // componentWillUnmount(){
  //     console.log('UNMOUNT')
  // }

  // 4 render jxs
  render() {
    console.log("RENDER");
    return (
      <div>
        <h3>{this.state.title}</h3>
        <div
          onClick={() =>
            this.setState({
              title: "something else"
            })
          }
        >
          CLICK TO CHANGE
        </div>
      </div>
    );
  }
}

export default Life;
