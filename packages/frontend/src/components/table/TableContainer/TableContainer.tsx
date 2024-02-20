import React from "react";
import { ContainerTable, StyledTable } from "./TableContainer.style";
import { QueryKeys, columns, sorter } from "@/shared/constants/table.constant";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TableFetcher } from "@/pages/table/table.fetcher";
import i18n from "@/locales/core/i18n";
import { Popconfirm, Space, notification } from "antd";
import { PortDataType, PortItemType, PortTableItemType } from "@/shared/types/Port.type";
import { openNotification } from "@/shared/utils";
import { usePortStore } from "@/store/usePortStore";
import { useQueryPortData } from "@/hooks/useQueryPortData";

function TableContainer() {
  const [api, contextHolder] = notification.useNotification();
  const { setModalState } = usePortStore();
  const queryClient = useQueryClient();

  const _columns = [
    ...columns,
    {
      title: 'Actions',
      key: 'operations',
      fixed: 'right',
      render: (_: any, record: PortTableItemType) => (
        <>
          <Space size="middle">
            <a onClick={() => handleEdit(record)}>Edit</a>
            <Popconfirm
              title="Delete the record"
              description="Are you sure to delete this record?"
              onConfirm={() => handleDelete(record.id || '')}
              okText="Yes"
              cancelText="No"
            >
              <a>Delete</a>
            </Popconfirm>
          </Space>
        </>
      ),
    },
  ];

  // Translate columns
  const tColumns = _columns?.map((column) => ({
    ...column,
    title: i18n.getText(`table.portcols.${column.key}`),
  }));

  const { mutateAsync: deletePort } = useMutation({
    mutationFn: (recordId: string) => TableFetcher.deletePort(recordId),
    onSuccess: () => {
      openNotification(api, 'success', 'Deleted');
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.PORT_DATA]
      });
    },
    onError: () => {
      openNotification(api, 'error');
    },
  })

  const handleDelete = async (id: string) => {
    await deletePort(id);
  };

  const handleEdit = (data: PortItemType) => {
    setModalState({
      isEdit: true,
      formData: data,
      isOpen: true,
    });
  };

  const { data: ports, isLoading, isError } = useQueryPortData();

  const filteredPorts = React.useMemo(() => {
    return (ports as PortDataType ?? []).slice().sort(sorter)
  }, [ports])

  if (isError) {
    return <div>Error fetching port data.</div>;
  }

  return (
    <>
      {contextHolder}
      <ContainerTable>
        <StyledTable
          scroll={{
            x: "max-content",
            y: "auto",
          }}
          rowKey="id"
          dataSource={filteredPorts}
          columns={tColumns}
          loading={isLoading}
          pagination={{ position: ["bottomCenter"], showSizeChanger: false, pageSize: 7 }}
        />
      </ContainerTable>
    </>
  );
}

export default TableContainer;
