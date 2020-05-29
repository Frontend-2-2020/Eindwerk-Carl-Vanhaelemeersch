import Axios from "axios";

export const getPosts = (page) => (dispatch) => {
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

// export const getPosts = () => (dispatch) => {
//   Axios.get("https://eindwerk.jnnck.be/api/posts?page=" + 2)
//     .then((response) => {
//       console.log("action", response.data.data);
//       return dispatch({
//         type: "GET_POSTS",
//         payload: response.data,
//       });
//     })
//     .catch((e) => {
//       console.log(e.response);
//     });
// };
