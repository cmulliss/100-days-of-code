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

* then import { createStore } from redux and add const store as fn
* then pass a store key to provider, as store
* what a reducer actually means in terms of redux so that we can pass one to the store
* if redux app state exists as a store or single object, what reducers do is simply take the state in an action and return new state
* so reducers, based on the action, will modify the state in a pure way
* must NEVER mutate the state directly, will cause huge performance errors, so what we do is take the state and return an entirely new instance of it
* create reducers folder in src, with index.js file
* import ADD_REMINDER from constants file
* to begin we will have one reducer, as a constant, named reminders
* it's another anonymous => it will have 2 parameters, a state parameter, pre-initialised to an empty array as well as an action parameter as second argument
* then initialise the variable within a reminders reducer called reminders, will simply be null, later on will change reminders variable to become a return state
* Our action returns the type, we can use that type to understand exactly how we want to modify our reminders or state
* so we use a switch statement on the action type because we can expect more than one type of action in the future, besides addReminder
* set reminders to an array, and use spread operator and spread on state, allows us to copy the contents of one array object into another array the first element in the reminders array will be this current spread state, and the next one will be a new reminder with our actions
* Now we need to define this helper reminder function, with one argument, action, as its parameter
* we will simply return an object as a reminder with the text of action.text then an id of a random variable
* default in this switch statement is state
* then export our reducer
