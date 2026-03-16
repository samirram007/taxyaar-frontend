import type { AxiosInstance } from "axios";
import axios from "axios";


const axiosClient: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    // baseURL: '/api',
    withCredentials: true,
    // headers: {
    //     'Content-Type': 'application/json',
    // },
});


axiosClient.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => Promise.reject(error)
)