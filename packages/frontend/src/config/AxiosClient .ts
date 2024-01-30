import { BE_URL } from "@/shared/constants/beUrl";
import axios, { AxiosError } from "axios";

const httpClient = axios.create({
  baseURL: BE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default httpClient;
