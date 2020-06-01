const initialState = {};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return {
        allPosts: action.payload.data,
        current_page: action.payload.current_page,
        total_items: action.payload.total,
        per_page: action.payload.per_page,
      };
    default:
      return state;
  }
};
export default postReducer;
