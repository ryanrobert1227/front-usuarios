import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000/contas",
  timeout: 10000,
});
