import { BaseEntity } from "./base.entity";
export declare class Port extends BaseEntity {
    country: string;
    name: string;
    vesselsInPort: number;
    departures: string;
    arrivals: string;
    type: string;
    areaLocal: string;
    areaGlobal: string;
    otherPortNames: string;
}
