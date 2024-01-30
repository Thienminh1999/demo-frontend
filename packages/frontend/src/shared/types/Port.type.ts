export type PortItemType = {
	country?: string;
	name?: string;
	portCode?: string;
	vesselsInPort?: number;
	departures?: number;
	arrivals?: number;
	type?: string;
	areaLocal?: string;
	areaGlobal?: string;
	otherPortNames?: string;
};

export type PortDataType = PortItemType[];

export type CommonDataResponse<T> = {
	result: T;
	status: number;
};
