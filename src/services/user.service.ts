import httpCommon from "../http-common";
import authHeader from "./auth-header";
import { User } from "../models/user.model";


class UserService {
    login(data: User) {
        return httpCommon.post("/auth/login", data)
            .then(resp => {
                if (resp.data.token) {
                    localStorage.setItem('user', JSON.stringify(resp.data));   
                }
                return resp.data;
            });
    }
    logout() {
        localStorage.removeItem('user');
    }

    getCurrentUser() {
        return httpCommon.get("/users/current", { headers: authHeader() });
    }
}

export default new UserService();
