import axios, { AxiosInstance } from "axios";

const baseURL = ' https://api.thecatapi.com/v1/images/search';

export const defaultAxiosInstance: AxiosInstance = axios.create({baseURL: baseURL});
