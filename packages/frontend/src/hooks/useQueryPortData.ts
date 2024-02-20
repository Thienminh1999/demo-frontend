import { QueryKeys } from "@/shared/constants/table.constant";
import { useQuery } from "@tanstack/react-query";
import { TableFetcher } from "@/pages/table/table.fetcher";

export const useQueryPortData = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [QueryKeys.PORT_DATA],
    queryFn: TableFetcher.getAllPort
  });

  return { data, isLoading, isError };
}