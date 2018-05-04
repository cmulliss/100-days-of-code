export function moviesList() {
  return {
    type: "MOVIES_LIST",
    payload: [
      { id: 1, name: "Pulp Fiction" },
      { id: 2, name: "Pacific Rim" },
      { id: 3, name: "Rambo" }
    ]
  };
}

/*
whenever we call an action, we call a fn
action is an array of objects.
This action creator is going to go to the reducers and pass this object. This object is going to be received by all the reducers, and the reducers will try to search and match up a type, in this case MOVIES_LIST, will return the actual payload, the list of movies. The reducer will grab this payload and go to the combined reducers, the combined reducers to the index, and it's just going to set a new state.

How do we connect the action creators with the reducers?
We do this from the application. From app component, make call to this action creator. We connect the action creators and the reducers through the component.

*/
