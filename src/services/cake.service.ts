import httpCommon from "../http-common";
import authHeader from "./auth-header";
import { Cake } from "../models/cake.model";


class CakeService {
    getCurrentUser() {
        return httpCommon.get("/users/current", { headers: authHeader() });
    }

    create(cake: any) {
        return httpCommon.post("/cakes", cake, { 
            headers: {
                ...authHeader(),
                'content-type': 'multipart/form-data',
            } 
        })
            .then(resp => {
                return resp;
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

    updateById(id: string | undefined, cake: any) {
        return httpCommon.put(`/cakes/${id}`, cake, {
            headers: {
                'content-type': 'multipart/form-data',
            }
        });
    }
}

export default new CakeService();
