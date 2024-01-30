import type { TableProps } from "antd";

export const columns: TableProps<any>["columns"] = [
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Port Code",
    dataIndex: "portCode",
    key: "portCode",
  },
  {
    title: "Vessels In Port",
    dataIndex: "vesselsInPort",
    key: "vesselsInPort",
  },
  {
    title: "Departures",
    dataIndex: "departures",
    key: "departures",
  },
  {
    title: "Arrivals",
    dataIndex: "arrivals",
    key: "arrivals",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Area Local",
    dataIndex: "areaLocal",
    key: "areaLocal",
  },
  {
    title: "Area Global",
    dataIndex: "areaGlobal",
    key: "areaGlobal",
  },
  {
    title: "Other Port Names",
    dataIndex: "otherPortNames",
    key: "otherPortNames",
  },
];
