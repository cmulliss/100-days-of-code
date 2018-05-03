import { combineReducers } from "redux";
import movies from "./movies_reducer";

const rootReducer = combineReducers({
  movies
});
export default rootReducer;

/* need to create a variable to host all the reducers
a fn with an object with all the reducers, rootReducer,
movies in this case. Export so available to other components inside the same app.

*/
