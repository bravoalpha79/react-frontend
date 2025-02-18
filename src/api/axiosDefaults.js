import axios from "axios";

axios.defaults.baseURL = "https://drf-api-ba79-ab0b6297db4e.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
