import axios from "axios";

const client = axios.create({
  baseURL: import.meta.env.VITE_ENDPOINT_URI,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    timeout: 2000,
  },
});

client.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export { client };
