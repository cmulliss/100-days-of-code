import { FETCH_WEATHER } from "../actions/index";

// reducers, 1st arg is always state, 2nd is action
export default function(state = [], action) {
  // console.log("Action received", action);
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state];
  }   
  return state;
}
