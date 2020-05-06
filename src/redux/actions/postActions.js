import Axios from "axios";

export function getPosts() {
  return function (dispatch) {
    Axios.get("https://eindwerk.jnnck.be/api/posts")
      .then((response) => {
        console.log(response.data.data);
        dispatch({
          type: "GET_POSTS",
          payload: response.data.data,
        });
      })
      .catch((e) => {
        console.log(e.response);
      });
  };
}
