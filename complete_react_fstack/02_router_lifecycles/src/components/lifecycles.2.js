import React, {PureComponent } from 'react'

// react is going to do everything in steps
// 1. get default props from ReactRouter
// 2. set default state

class Life extends PureComponent {
    state = {
        title: 'Life Cycles'
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
}
export default Life;
/*
//5. after render 
componentDidMount() {
    console.log('5 after render')
    document.querySelector('h3').style.color = 'red'
}

render is a default method from react
so, before render can use built in method
componentWillMount() gets called before render
lifecycles run by default 
PureComponent is checking state, unless a real
change inside state will do nothing.
*/