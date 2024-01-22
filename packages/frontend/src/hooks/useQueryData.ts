import httpClient from "@/config/AxiosClient ";
import { useQuery } from "@tanstack/react-query";

type QueryDataProps = {
  endPoint: string;
  queryKey: string;
};

function useQueryData<T>({ endPoint, queryKey }: QueryDataProps) {
  const { data } = useQuery({
    queryKey: [queryKey],
    queryFn: () =>
      httpClient.get<{ data: T }>(endPoint).then((res) => res.data),
  });
}
