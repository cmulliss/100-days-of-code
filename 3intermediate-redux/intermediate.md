## Summary

* the app starts
* we type some data inside, for example 'ford'
* this is going to trigger an action
* the action is going to go and make a network request
* when it's done, the middleware, redux-promise, waits until there is a response
* once we get a response, the action creator is going to flow through all the reducers with the payload and type
* whenever there is a match with the type name, the action creators type and the reducers, it's going to grab the data we have on the payload and update the state.
* and once the state is updated, this list of cars, it's always listening, with the mapStateToProps, always listening for changes inside the state.
* and since we have a change in state, is going to re-render the app because we have it inside this.props.
* then react is going to be re-rendered with a list
