import React, { Component } from 'react'

// react is going to do everything in steps
// 1. get default props from ReactRouter
// 2. set default state

class Life extends Component {
    state = {
        title: 'Life Cycles'
    }
// 3. state, before render jsx
    componentWillMount() {
        console.log('3 before render')
        //document.querySelector('h3').style.color = 'red'
        //error as hasn't rendered yet, so no h3 yet
    }
    componentWillUpdate() {
        console.log('BEFORE UPDATE')
    }
    componentDidUpdate() {
        console.log('AFTER UPDATE')
    }
    // receives 2 arguments
    // receives true or falsek will be checking 
    // the next state of both arguments
    shouldComponentUpdate(nextProps, nextState) {
        //console.log(nextState);
        console.log(this.state.title)
        console.log(nextState.title)
        // if passes don't change it
        if(nextState.title === 'something else' ) {
            return false
        }
        // otherwise change it
        // with this can choose whether to move 
        // forward with the update
        return true;
    }
    // checking for new props, difficult to check
    // only getting props from ReactRouter
    componentWillReceiveProps() {
        console.log('BEFORE RECEIVE PROPS')
    }
    //unmount when goes to another component
    componentWillUnmount() {
        console.log('UNMOUNT')
        
    }
// 4. render jsx
    render () {
        console.log('RENDER')
        //console.log(this.props)
        return (
            <div>
                <h3>{this.state.title}</h3>
                <div onClick={
                    () => this.setState({title: 'something else'})
                }>click to change</div>
            </div>
        )
    }
    //5. after render 
    componentDidMount() {
        console.log('5 after render')
        document.querySelector('h3').style.color = 'red'
    }
}

export default Life;
/* render is a default method from react
so, before render can use built in method
componentWillMount() gets called before render
liecycles run by default
*/