import axios from "axios";
//using es6 template strings ``
const API_KEY = "74511c527b1010d695024f17e6be9439";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// extract to a separate variable and export it
// will import to reducer too later on
export const FETCH_WEATHER = "FETCH_WEATHER";
// action creator, new fn and export it
// resonsible for making ajax api request
// axios for simple ajax get request from browser
// returns a promise called 'request' into our action
// pass as payload, additional data that describes action
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},uk`;
  const request = axios.get(url);
  // action creators have to return an action,
  // an action is an object that always has to return a type
  //console.log("Request:", request);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

// variable with string assigned, exported that
// variable, then created an action with type same
// going to create a reducer that handles this type
// our variable holds our action type
