import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreatePort } from "../dtos/CreatePort.dto";
import { Port } from "../model/port.entity";
import { Repository } from "typeorm";
import { UpdatePort } from "../dtos/UpdatePort.dto";
import { RAW_PORT_DATA } from "./port.constant";

import { ResponseObject } from "../utils/ResponseUtil";

@Injectable()
export class PortService {
  constructor(
    @InjectRepository(Port) private readonly repo: Repository<Port>
  ) { }

  public async createRawPorts() {
    await this.repo.clear();
    const result = await Promise.all(RAW_PORT_DATA.map(async (data) => {
      const [
        country,
        name,
        portCode,
        vesselsInPort,
        departures,
        arrivals,
        , // Skip this value(Expected Arrivals)
        type,
        areaLocal,
        areaGlobal,
        otherPortNamesString
      ] = data;

      const sanitizedOtherPortNamesString = otherPortNamesString
        .replace(/'/g, '') // Remove single quotes
        .replace(/\s*,\s*/g, ',') // Remove spaces after commas
        .replace(/^\[|\]$/g, '') // Remove brackets at the beginning and end
        .trim();

      const otherPortNames = sanitizedOtherPortNamesString !== "" ? sanitizedOtherPortNamesString : 'N/A';
      const body = {
        country,
        name,
        portCode: portCode || 'N/A',
        vesselsInPort: parseInt(vesselsInPort),
        departures: parseInt(departures),
        arrivals: parseInt(arrivals),
        type,
        areaLocal,
        areaGlobal,
        otherPortNames,
      };
      return this.createNewPort(body)
    }));

    return ResponseObject<any>(201, result)
  }

  public async getAll() {
    const result = await this.repo.find({ where: { delflg: false } });
    return ResponseObject<Port>(200, result)
  }

  public async getPort(id: string) {
    const result = await this.repo.findOneBy({ id })
    return ResponseObject<Port>(200, result)
  }

  public async createNewPort(port: CreatePort) {
    const newPort: Port = { ...port };
    const result = await this.repo.save(newPort);
    return ResponseObject<Port>(201, result)
  }

  public async updatePort(port: UpdatePort) {
    const updatedPort: Port = { ...port };
    const result = await this.repo.save(updatedPort);
    return ResponseObject<Port>(200, result)
  }

  public async deletePort(id: string) {
    const deletePort = await this.repo.findOneBy({ id: id })
    deletePort.delflg = true;
    const result = await this.repo.save(deletePort);
    return ResponseObject<Port>(200, result)
  }
}
