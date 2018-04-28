import { combineReducers } from "redux";
import WeatherReducer from "./reducer_weather";

//will be responsible for the weather part of our state
const rootReducer = combineReducers({
  //state: (state = {}) => state
  weather: WeatherReducer
});

export default rootReducer;
