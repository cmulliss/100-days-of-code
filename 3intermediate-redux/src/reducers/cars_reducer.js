export default function(state = [], action) {
  console.log(action);
  switch (action.type) {
    case "SEARCH_CARS":
      return action.payload;
    default:
      return state;
  }
  return state;
}
