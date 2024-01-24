import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { PortService } from "./port.service";
import { CreatePort } from "../dtos/CreatePort.dto";

@Controller()
export class PortController {
  constructor(private portService: PortService) { }

  @MessagePattern("get_ports")
  getAllPorts() {
    return this.portService.getAll()
  }

  @MessagePattern("create_port")
  createPort(@Payload() body: CreatePort) {
    return this.portService.createNewPort(body)
  }
}
