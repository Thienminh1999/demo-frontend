import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreatePort } from "../dtos/CreatePort.dto";
import { Port } from "../model/port.entity";
import { Repository } from "typeorm";
import { UpdatePort } from "../dtos/UpdatePort.dto";
import { DeletePort } from "../dtos/DeletePort.dto";

import { ResponseObject } from "../utils/ResponseUtil";

@Injectable()
export class PortService {
  constructor(
    @InjectRepository(Port) private readonly repo: Repository<Port>
  ) { }

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

  public async deletePort(port: DeletePort) {
    const deletePort = await this.repo.findOneBy({ id: port.id })
    deletePort.delflg = true;
    const result = await this.repo.save(deletePort);
    return ResponseObject<Port>(200, result)
  }
}
