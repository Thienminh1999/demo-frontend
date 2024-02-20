import httpClient from "@/config/AxiosClient ";
import { endPoint } from "@/shared/constants/beUrl";
import { PortItemType } from "@/shared/types/Port.type";

const BASE_URL = endPoint.ports;

export const TableFetcher = {
    async getAllPort() {
        const { data } = await httpClient.get(BASE_URL);
        return data?.result;
    },

    async createPort(newPort: PortItemType) {
        return await httpClient.post(BASE_URL, newPort);
    },
    async editPort(updatingPort: PortItemType) {
        return await httpClient.put(BASE_URL, updatingPort);
    },
    async deletePort(id: string) {
        return await httpClient.delete(`${BASE_URL}/${id}`);
    },
}