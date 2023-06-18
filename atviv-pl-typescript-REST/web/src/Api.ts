import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:32831",
});

export default Api;