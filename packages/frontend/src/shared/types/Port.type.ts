export type PortTableItemType = {
	id: string;
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
	lastChangedDateTime: string
};

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

export type PortDataType = PortTableItemType[];

export type CommonDataResponse<T> = {
	result: T;
	status: number;
};

export type NotificationType = 'success' | 'info' | 'warning' | 'error';