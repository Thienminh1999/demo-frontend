import React, { useEffect } from "react";
import { Table } from "antd";
import { ContainerTable, StyledTable } from "./TableContainer.style";
import { columns } from "@/shared/constants/table.constant";
import { useQueryData } from "@/hooks/useQueryData";
import { endPoint } from "@/shared/constants/beUrl";
import { usePortStore } from "@/store/usePortStore";

function TableContainer() {
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
        columns={columns}
        loading={isLoading}
        pagination={{ position: ["bottomCenter"] }}
      />
    </ContainerTable>
  );
}

export default TableContainer;
