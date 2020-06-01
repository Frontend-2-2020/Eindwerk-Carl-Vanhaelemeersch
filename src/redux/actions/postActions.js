import Axios from "axios";

export const getPosts = (page = 1) => (dispatch) => {
  Axios.get("https://eindwerk.jnnck.be/api/posts?page=" + page)
    .then((response) => {
      // console.log(response.data);
      return dispatch({
        type: "GET_POSTS",
        payload: response.data,
      });
    })
    .catch((e) => {
      console.log(e.response);
    });
};
