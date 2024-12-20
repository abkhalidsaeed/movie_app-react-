import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/registration";

export function register(user) {
    return http.post(apiEndpoint, {
        username:user.username,
        email:user.email,
        password:user.password
    })
} 