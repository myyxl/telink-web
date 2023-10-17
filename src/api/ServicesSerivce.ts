import axios from "axios";
import {ServiceStatus} from "../model/ServiceStatus";

export const getStatus = () => {
    return axios.get<ServiceStatus>("http://localhost:8000/service/status").catch(() => undefined)
}