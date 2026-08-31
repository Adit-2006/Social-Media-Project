import axios from 'axios'

const axiosInstance = axios.create({
  baseUrl: "http://localhost:8082/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json"
  }
})

export default axiosInstance;