# Redux: first principles

* we have one huge store holding our application state
* store is a global objext that holds the app state
* it allows the state to be updated by dispatch actions that changes the state based on actions we dispatched throughout our app
* need an 'add reminder' action so we can update the store
* actions are plain js objects
* actions must have a type property which tells redux what kind of action is being performed, and can sometimes have the payload key which holds all the data, or some other key which holds all the neccessary info within the js object which you will use to update the store
* need an action creator, more like a fn, to return the js action
* so, it returns the whole js object
* the action creator in the function which returns that action, that returns the js object
* constants.js file in src folder
