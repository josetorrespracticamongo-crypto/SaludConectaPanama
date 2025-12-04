import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:40000/api", // tu backend
});
