/* state argument is not application state, only 
the state for which this reducer is responsible
reducers always have 2 arguments, the current state 
and action
*/
export default function(state = null, action) {
  switch (action.type) {
    case "BOOK_SELECTED":
      return action.payload;
  }

  return state;
}
