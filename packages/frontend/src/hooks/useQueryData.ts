import httpClient from "@/config/AxiosClient ";
import { useQuery } from "@tanstack/react-query";

type QueryDataProps = {
  endPoint: string;
  queryKey: string;
};

export const useQueryData = ({ endPoint, queryKey }: QueryDataProps) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [queryKey],
    queryFn: () =>
      httpClient.get(endPoint).then((res) => res?.data || []),
  });
  
  return { data, isLoading, isError };
}
