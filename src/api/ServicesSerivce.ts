import {ServiceStatus} from "../model/ServiceStatus";
import {http} from "./http";

export const getStatus = () => http.get<ServiceStatus>("/service/status").catch(() => undefined)