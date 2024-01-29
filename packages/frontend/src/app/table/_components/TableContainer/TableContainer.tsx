import React from "react";
import { Table } from "antd";
import { ContainerTable } from "./TableContainer.style";
import { columns, dataSource } from "@/constants/table.constant";

function TableContainer() {
  return (
    <ContainerTable>
      <Table rowKey='id' dataSource={dataSource} columns={columns} />;
    </ContainerTable>
  );
}

export default TableContainer;
