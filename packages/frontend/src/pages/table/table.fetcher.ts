import httpClient from "@/config/AxiosClient ";
import { endPoint } from "@/shared/constants/beUrl";

export const TableFetcher = {
    async getAllPort() {
        try {
            const res = await httpClient.get(endPoint.ports);
            return res?.data?.result;
        } catch (error: any) {
            return error.response;
        }
    },
}