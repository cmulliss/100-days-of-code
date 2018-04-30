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
* First constant will be ADD_REMINDER
* Add an actions folder to src, and index.js to that folder
* first import the ADD_REMINDER constant
* then make the action creator, call the fn as addReminder and declare it as a constant
* Its going to be an anonymous => with one parameter, text
* Define an action within here, with type ADD_REMINDER
* can console.log it to see what is going on
* and return the action
* We now need to think of initialising the actual store
* although we have an action creator for adding reminders, we have no idea what the state is for the global application
* we need to set up a provider component, from react-redux that will pass down its store to our entire app
* in index.js, import provider from react-redux
* just write app tag within provider tag

```javascript
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

* then import createStore from redux and add const store as fn
* then pass a store key to provider, as store
* what a reducer actually means in terms of redux so that we can pass one to the store
* if redux app state exists as a store or single object, what reducers do is simply take the state in an action and return new state
* so reducers, based on the action, will modify the state in a pure way
* must NEVER mutate the state directly, will cause huge performance errors, so what we do is take the state and return an entirely new instance of it
* create reducers folder in src, with index.js file
