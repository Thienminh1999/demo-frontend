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
    this.client.subscribeToResponseOf("ports_post");
    this.client.subscribeToResponseOf("ports_get");
  }

  @Post("/create-port")
  createPort(@Body() body): any {
    return this.client.send("ports_post", body);
  }

  @Get("/get-ports")
  findPort(@Body() body): any {
    return this.client.send("ports_get", body);
  }
}
