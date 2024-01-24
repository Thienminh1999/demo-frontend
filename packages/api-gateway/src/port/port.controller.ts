import { Body, Controller, Get, Post } from "@nestjs/common";
import { Client, ClientKafka, Transport } from "@nestjs/microservices";

@Controller("port")
export class PortController {
  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: "port",
        brokers: ["localhost:29092"],
      },
      consumer: {
        groupId: "port-consumer",
      },
    },
  })
  client: ClientKafka;

  async onModuleInit() {
    this.client.subscribeToResponseOf("create_port");
    this.client.subscribeToResponseOf("get_ports");
  }

  @Post("/ports")
  createPort(@Body() body): any {
    return this.client.send("create_port", body);
  }

  @Get("/ports")
  findPort(@Body() body): any {
    return this.client.send("get_ports", body);
  }
}
