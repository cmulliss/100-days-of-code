import React, { Component } from 'react'
import Course from './Course';

class CourseSales extends Component {

    // method will calculate the price and update the total
    // will take one argument, the pricing will be passed on
    // will update the state total...
    sumPrice(price) {
        this.setState({total: this.state.total + price})
    }
        constructor(props) {
            super(props);
            this.state = { 
                total: 0
             }
    // need to bind sumPrice as not in scope
    // whenever you declare a function, have to bind it
    // bset to do it in the constructor
    this.sumPrice = this.sumPrice.bind(this);
            }
    //iterate through with map, use es6 syntax
    // takes 2 arguments, and then return, into another 
    // component, <Course /> name, price, key
    // also giving access to sumPrice
    render () {
        console.log(this.props.items);
        let courses = this.props.items.map((item, i) => {
            return <Course name={item.name} 
            price={item.price}
            key={i}
            sumPrice={this.sumPrice}
            item={item.active}/>
        } )
        return (
            <div>
              <h1>You can buy courses: </h1>
              <div id="courses">
              {courses}
              <p id="total">Total <b>{this.state.total}</b></p>
              </div>
            </div>
        )
    }
}

export default CourseSales;