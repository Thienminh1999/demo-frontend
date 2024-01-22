import { CreatePort } from "../dtos/CreatePort.dto";
import { Port } from "../model/port.entity";
import { Repository } from "typeorm";
export declare class PortService {
    private readonly repo;
    constructor(repo: Repository<Port>);
    getAll(): Promise<Port[]>;
    createNewPort(port: CreatePort): Promise<void>;
}
