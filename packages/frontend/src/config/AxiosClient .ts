import axios, { AxiosError } from "axios";

const httpClient = axios.create({
  baseURL: process.env.BACK_END_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default httpClient;
