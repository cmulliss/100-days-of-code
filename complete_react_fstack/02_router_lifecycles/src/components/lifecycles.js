import React, { Component } from 'react'

// react is going to do everything in steps
// 1. get default props from ReactRouter
// 2. set default state

class Life extends Component {
    state = {
        title: 'Life Cycles'
    }

    render () {
        console.log(this.props)
        return (
            <div>
                <h3>{this.state.title}</h3>
            </div>
        )
    }
}

export default Life;