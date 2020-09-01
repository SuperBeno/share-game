import axios from "axios";

/*base URL to make request*/
const instance = axios.create({
  baseURL: "https://api.rawg.io/api/",
});

export default instance;
