import Axios from "axios";

// ASYNC FUNCTION WITH PAYLOAD, WHEN DISPATCHED, PREFORM FUNCTION
export const getPosts = (page = 1) => (dispatch) => {
  Axios.get("https://eindwerk.jnnck.be/api/posts?page=" + page)
    .then((response) => {
      return dispatch({
        type: "GET_POSTS",
        payload: response.data,
      });
    })
    .catch((e) => {
      console.log(e.response);
    });
};
