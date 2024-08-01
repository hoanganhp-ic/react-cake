import httpCommon from "../http-common";
import authHeader from "./auth-header";
import { User } from "../models/user.model";
import { Cake } from "../models/cake.model";


class CakeService {
    getCurrentUser() {
        return httpCommon.get("/users/current", { headers: authHeader() });
    }

    create(cake: Cake) {
        return httpCommon.post("/cakes", cake, { headers: authHeader() })
            .then(resp => {
                return resp.data;
            });
    }

    search(searchParams: any) {
        return httpCommon.get("/cakes/search", { headers: authHeader(), params: searchParams });
    }

    getById(id: string | undefined) {
        return httpCommon.get(`/cakes/${id}`, { headers: authHeader() });
    }

    deleteById(id: string | undefined) {
        return httpCommon.delete(`/cakes/${id}`, { headers: authHeader() });
    }
}

export default new CakeService();
