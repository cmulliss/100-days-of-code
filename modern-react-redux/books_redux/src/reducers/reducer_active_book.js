/* state argument is not application state, only 
the state for which this reducer is responsible
reducers always have 2 arguments, the current state 
and action
when our app boots up, returns state which will be null,
no acitive book as nothing clicked on yet,so add an 
initial check in the render method in book-detail
*/
// State argument is not application state, only the state
// this reducer is responsible for
export default function(state = null, action) {
  switch (action.type) {
    case "BOOK_SELECTED":
      return action.payload;
  }

  return state;
}
