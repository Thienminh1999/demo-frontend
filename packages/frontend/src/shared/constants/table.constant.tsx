import { PortTableItemType } from "../types/Port.type";

export const sorter = (a: PortTableItemType, b: PortTableItemType): number => {
  return new Date(b.lastChangedDateTime).getTime() - new Date(a.lastChangedDateTime).getTime();
};

export const columns: any = [
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
    width: 100,
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
    width: 100,
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

export enum QueryKeys {
  PORT_DATA = 'portData',
}

export enum FormFieldNames {
  COUNTRY = 'country',
  NAME = 'name',
  PORT_CODE = 'portCode',
  VESSELS_IN_PORT = 'vesselsInPort',
  DEPARTURES = 'departures',
  ARRIVALS = 'arrivals',
  TYPE = 'type',
  AREA_LOCAL = 'areaLocal',
  AREA_GLOBAL = 'areaGlobal',
  OTHER_PORT_NAMES = 'otherPortNames',
}
