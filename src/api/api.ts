import axios from "axios";

export default axios.create({
  baseURL: "https://tame-blue-narwhal-yoke.cyclic.app/contas",
  timeout: 10000,
});
