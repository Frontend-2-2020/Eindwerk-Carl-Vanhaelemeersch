const initialState = [];
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return action.payload;
    // case "GET_PAGE":
    //   return action.payload;
    default:
      return state;
  }
};
export default postReducer;
