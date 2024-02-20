import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { PortService } from "./port.service";
import { CreatePort } from "../dtos/CreatePort.dto";
import { UpdatePort } from "../dtos/UpdatePort.dto";

@Controller()
export class PortController {
  constructor(private portService: PortService) { }

  @MessagePattern("get_ports")
  getAllPorts() {
    return this.portService.getAll()
  }

  @MessagePattern("get_port")
  getPort(id: string) {
    return this.portService.getPort(id)
  }

  @MessagePattern("create_raw_ports")
  createRawPorts() {
    return this.portService.createRawPorts()
  }

  @MessagePattern("create_port")
  createPort(@Payload() body: CreatePort) {
    return this.portService.createNewPort(body)
  }

  @MessagePattern("update_port")
  updatePort(@Payload() body: UpdatePort) {
    return this.portService.updatePort(body)
  }

  @MessagePattern("delete_port")
  deletePort(id: string) {
    return this.portService.deletePort(id)
  }
}
