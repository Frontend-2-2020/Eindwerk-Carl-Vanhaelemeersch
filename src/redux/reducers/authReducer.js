// SETUP INIT STATE, DECLARE NAME ACTION, WHAT IT DOES
const initialState = {};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return action.payload;
    default:
      return state;
  }
};
export default authReducer;
