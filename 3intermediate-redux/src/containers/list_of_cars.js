import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ListOfCars extends Component {
  listOfCars = ({ cars }) => {
    if (cars) {
      return cars.map((car) => {
        return (
          <Link key={car.id} to={`/car/${car.id}`} className="car_item">
            <div className="left">
              <img src={`/images/${car.image}`} />
            </div>
            <div className="right">
              <h4>{car.model}</h4>
              <h6>{car.brand}</h6>
            </div>
          </Link>
        );
      });
    }
  };

  render() {
    return <div>{this.listOfCars(this.props)}</div>;
  }
}
function mapStateToProps(state) {
  console.log(state);
  return {
    cars: state.cars
  };
}
export default connect(mapStateToProps, null)(ListOfCars);

/*
This component has no action, only cares about what is happening with redux state. So, use function mapStateToProps, argument 'state', returning 'cars'. Need to connect this to ListOfCars. Ist argument mapStateToProps, second is the actions, but don't have any so 'null'.
When starts, get an empty [], as set in the reducer
Enter 'ford' and get a new state and an array of 4 items
We have the data, and it's available inside this.props.cars, we can create a fn to map all this info.
creater the map, so we can render a simple list. Need to call to a fn which will render this list, so pass some arguments to the fn, and as we have it available inside this.props, use as argument.
Call to this fn, create it with =>, and call to it.
Inside this.props we have the cars, so we can make use of destructuring and since we have this.props we can get direct access to 'cars'. So, we need to render the list, but need a conditional for when first starts, if (cars)
Takes an anonymous fn, iterate each car inside that list of cars.
Need to access the data in the json, start with 'model'.
*/
