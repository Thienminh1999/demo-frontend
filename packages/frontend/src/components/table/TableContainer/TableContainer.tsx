import React from "react";
import { ContainerTable, StyledTable } from "./TableContainer.style";
import { QueryKeys, columns } from "@/shared/constants/table.constant";
import { useQuery } from "@tanstack/react-query";
import { TableFetcher } from "@/pages/table/table.fetcher";
import i18n from "@/locales/core/i18n";

function TableContainer() {
  // Translate columns
  const tColumns = columns?.map((column) => ({
    ...column,
    title: i18n.getText(`table.portcols.${column.key}`),
  }));

  const { data: ports, isLoading, isError } = useQuery({
    queryKey: [QueryKeys.PORT_DATA],
    queryFn: TableFetcher.getAllPort
  });

  if (isError) {
    return <p>Error fetching ports.</p>;
  }

  return (
    <ContainerTable>
      <StyledTable
        scroll={{
          x: "max-content",
          y: "auto",
        }}
        rowKey="id"
        dataSource={ports}
        columns={tColumns}
        loading={isLoading}
        pagination={{ position: ["bottomCenter"], showSizeChanger: false, pageSize: 7 }}
      />
    </ContainerTable>
  );
}

export default TableContainer;
