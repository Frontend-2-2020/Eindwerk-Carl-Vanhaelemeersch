import Axios from "axios";

// GET TOKEN, CREATE CONST API. WHEN USED GIVES AUTORIZATION TO USE api
const TOKEN = window.localStorage.getItem("CarlEindwerk_token");
const API = Axios.create({
  baseURL: "https://eindwerk/jnnck.be/api/",
});

if (TOKEN) {
  API.defaults.headers.common["Authorization"] = "Bearer " + TOKEN;
}
export default API;
