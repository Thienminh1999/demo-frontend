import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreatePort } from "../dtos/CreatePort.dto";
import { Port } from "../model/port.entity";
import { Repository } from "typeorm";

@Injectable()
export class PortService {
  constructor(
    @InjectRepository(Port) private readonly repo: Repository<Port>
  ) {}

  public async getAll() {
    return await this.repo.find();
  }

  public async createNewPort(port: CreatePort) {
    const newPort: Port = { ...port };
    return await this.repo.save(newPort);
  }
}
