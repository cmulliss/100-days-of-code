import { ADD_REMINDER } from "../constants";

//helper reminder fn
const reminder = (action) => {
  return {
    text: action.text,
    id: Math.random()
  };
};

const reminders = (state = [], action) => {
  let reminders = null;

  switch (action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)];
      console.log("reminders as state", reminders);
      return reminders;
    default:
      return state;
  }
};
// export our reducer
export default reminders;
