import TitleContainer from "@/shared/components/TitleContainer/TitleContainer";
import React from "react";
import { TableFetcher } from "./table/table.fetcher";
import { QueryKeys } from "@/shared/constants/table.constant";
import { useQuery } from "@tanstack/react-query";
import i18n from "@/locales/core/i18n";

function index() {
  const { data: ports, isLoading, isError } = useQuery({
    queryKey: [QueryKeys.PORT_DATA],
    queryFn: TableFetcher.getAllPort
  });

  if (isError) {
    return <p>Error fetching ports.</p>;
  }
  
  return (
    <>
      <TitleContainer title={i18n.getText('common.dashboard')} />
    </>
  );
}

export default index;
