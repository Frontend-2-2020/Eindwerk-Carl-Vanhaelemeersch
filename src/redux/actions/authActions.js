import API from "../../libs/API";

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
