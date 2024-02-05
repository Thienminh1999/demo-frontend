import { BE_URL } from "@/shared/constants/beUrl";
import axios from "axios";

const httpClient = axios.create({
  baseURL: BE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default httpClient;
