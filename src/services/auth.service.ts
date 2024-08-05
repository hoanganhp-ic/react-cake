import axios from "axios";
import { User } from "../models/user.model";

const API_URL = process.env.REACT_APP_API;

export function login(data: User) {
    return axios.post(`${API_URL}/auth/login`, data)
        .then(resp => {
            if (resp.data.token) {
                localStorage.setItem('user', JSON.stringify(resp.data));   
            }
            return resp.data;
        });
}
