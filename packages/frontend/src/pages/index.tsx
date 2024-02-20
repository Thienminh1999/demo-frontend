import TitleContainer from "@/shared/components/TitleContainer/TitleContainer";
import React from "react";
import { TableFetcher } from "./table/table.fetcher";
import { QueryKeys } from "@/shared/constants/table.constant";
import { useQuery } from "@tanstack/react-query";
import i18n from "@/locales/core/i18n";
import DashBoardContainer from "@/components/dashboard/DashBoardContainer";
import { useQueryPortData } from "@/hooks/useQueryPortData";

function index() {
  const { data: ports, isLoading, isError } = useQueryPortData();

  if (isError) {
    return <div>Error fetching ports.</div>;
  }

  return (
    <>
      <TitleContainer title={i18n.getText("common.dashboard")} />
      <DashBoardContainer />
    </>
  );
}

export default index;
