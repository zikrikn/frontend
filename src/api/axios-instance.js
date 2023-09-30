import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "",
  headers: {
    timeout: 3000,
  },
});

export default axiosInstance;
