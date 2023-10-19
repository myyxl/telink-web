import axios from "axios";

export const baseUrl = 'http://192.168.178.164:8000';

export const http = axios.create({
    baseURL: baseUrl
})