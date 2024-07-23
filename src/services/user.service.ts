import httpCommon from "../http-common";

import { User } from "../models/user.model";

class UserService {
    login(data: User) {
        return httpCommon.post("/auth/login", data);
    }
}

export default new UserService();
