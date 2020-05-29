const initialState = {};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return {
        allPosts: action.payload.data,
        current_page: action.payload.current_page,
        last_page: action.payload.last_page,
      };
    default:
      return state;
  }
};
export default postReducer;
