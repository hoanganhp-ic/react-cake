import axios from "axios";
import userService from "./services/user.service";
import { useNavigate } from "react-router-dom";
import authHeader, { getCurrentUserClient, logout } from "./services/auth-header";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-type": "application/json"
    },
    timeout: 10000
})


axiosInstance.interceptors.request.use(
    (config) => {
        if (getCurrentUserClient()) {
            config.headers['Authorization'] = 'Bearer ' + getCurrentUserClient().token;
        }
        return config;
    },
    (error) => {
        console.log(error); // for debug
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
            logout();
        }
        return Promise.reject
    }
);

export default axiosInstance;
