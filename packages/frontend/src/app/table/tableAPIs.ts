import httpClient from "@/config/AxiosClient ";

export const TableAPIs = {
    async getAllPort() {
        try {
            const result = await httpClient.get("/ports");
            return result.data;
        } catch (error: any) {
            return error.response;
        }
    },
}