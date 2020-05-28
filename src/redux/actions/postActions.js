import Axios from "axios";

// export const getPage = (selectedPage) => async (dispatch) => {
//   const res = await Axios.get(
//     `https://eindwerk.jnnck.be/posts?page=${selectedPage}`
//   );
//   dispatch({ type: "GET_PAGE", payload: res.data });
// };

export function getPosts() {
  return function (dispatch) {
    Axios.get("https://eindwerk.jnnck.be/api/posts")
      .then((response) => {
        // console.log(response.data);
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
