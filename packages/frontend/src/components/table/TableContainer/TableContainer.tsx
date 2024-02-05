import React, { useEffect } from "react";
import { ContainerTable, StyledTable } from "./TableContainer.style";
import { columns } from "@/shared/constants/table.constant";
import { useQueryData } from "@/hooks/useQueryData";
import { endPoint } from "@/shared/constants/beUrl";
import { usePortStore } from "@/store/usePortStore";
import { useTranslation } from "react-i18next";

function TableContainer() {
  const { t } = useTranslation('table');

const tColumns = columns?.map((column) => ({
    ...column,
    title: t(`portcols.${column.key}`),
  }));

  const { ports, setPorts } = usePortStore();
  const { data, isLoading, isError } = useQueryData({
    endPoint: endPoint.ports,
    queryKey: "ports-table",
  });

  useEffect(() => {
    setPorts(data?.result || []);
  }, [data, setPorts]);

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
