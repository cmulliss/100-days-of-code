import axios from "axios";

const API_KEY = "74511c527b1010d695024f17e6be9439";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},GB`;
  const request = axios.get(url);

  console.log("Request:", request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
