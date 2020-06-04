import API from "../../libs/API";

// USE API INSTEAD OF AXIOS FOR AUTHORIZATION
// ASYNC FUNCTION, WHEN DISPATCHED, PREFORM FUNCTION
export function getUser() {
  return function (dispatch) {
    API.get("https://eindwerk.jnnck.be/api/user")
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: "GET_USERS",
          payload: response.data,
        });
      })
      .catch((e) => {
        console.log(e.response);
      });
  };
}
