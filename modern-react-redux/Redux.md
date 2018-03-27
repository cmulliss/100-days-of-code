# Redux

* redux is in charge of managing our application state
* state is a single plain js object
* application state is completely different and separate to component state

* reducers form application state
* reducers all get tied together by 'combineReducers' in the reducers/index.js file
* for each key in our combineReducers object, we assign one reducer
* and that reducer is responsible for creating this piece of state
* our reducers are in charge of changing our application state over time by the use of actions
* so whenever an action is dispatched it flows through all the different reducers in our application
* each reducer has the option to return a different piece of state than the usual, based on the type of action that was received
* action creators are just simple functions that return an action
* an action is just a plain js object
* actions must always have a type defined
* they can optionally have a payload or any other number of properties
* redux that's so simple, yes, but only simple once you actually understand what's going on.
