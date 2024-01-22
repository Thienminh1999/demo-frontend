import { PortService } from "./port.service";
import { CreatePort } from "../dtos/CreatePort.dto";
export declare class PortController {
    private portService;
    constructor(portService: PortService);
    getAllPorts(): Promise<import("../model/port.entity").Port[]>;
    createPort(body: CreatePort): Promise<void>;
}
