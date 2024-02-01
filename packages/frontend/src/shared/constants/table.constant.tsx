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
    width: 150,
  },
  {
    title: "Vessels In Port",
    dataIndex: "vesselsInPort",
    key: "vesselsInPort",
    width: 150,
  },
  {
    title: "Departures",
    dataIndex: "departures",
    key: "departures",
    width: 110,
  },
  {
    title: "Arrivals",
    dataIndex: "arrivals",
    key: "arrivals",
    width: 100,
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
