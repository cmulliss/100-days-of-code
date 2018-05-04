export default function(state = null, action) {
  switch (action.type) {
    case "MOVIES_LIST":
      return action.payload;
    default:
      return state;
  }
}

/* create a valid reducer, this reducer is going to return a new state if an action is matched, is going to be a fn. Write fn, and export so can be used in combineReducers.
Fn is going to have 2 main arguments: previous state and the action. The action is going to be the object above.
if the action.type is MOVIES_LIST, return action.payload
if no match return default, state.

Summary: the application loads, we have a movie, clicking on the movie is going to call the action creator, and the action creator is going to fetch the information, and it's going to pass an object to the reducers with the type and a payload. The reducer fn is going to catch whaever we have, is going to pass a default state and an action. Searches and tries to find a match for the action, if the type is MOVIES_LIST, we have a match, and what we return to redux is going to be the action.payload, the info about that movie, and then it's going to the combined reducers, the combined reducers is going to talk to the index.js, pass it to the create store. The create store will update the redux state, then the app re-renders.
*/
