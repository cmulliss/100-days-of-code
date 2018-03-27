import axios from "axios";

const API_KEY = "74511c527b1010d695024f17e6be9439";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},uk`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

// variable with string assigned, exported that
// variable, then created an action with type same
// going to create a reducer that hanles this type
// our variable holds our action type
