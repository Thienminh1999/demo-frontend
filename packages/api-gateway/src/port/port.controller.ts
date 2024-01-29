import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Client, ClientKafka, Transport } from "@nestjs/microservices";

@Controller("ports")
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
    this.client.subscribeToResponseOf("get_port");
    this.client.subscribeToResponseOf("update_port");
    this.client.subscribeToResponseOf("delete_port");
  }

  @Post("/")
  createPort(@Body() body): any {
    return this.client.send("create_port", body);
  }

  @Get("/")
  findPort(@Body() body): any {
    return this.client.send("get_ports", body);
  }

  @Get(':id')
  findPortById(@Param('id') id): any {
    return this.client.send("get_port", id);
  }

  @Put("/")
  updatePort(@Body() body): any {
    return this.client.send("update_port", body);
  }

  @Delete(':id')
  deletePort(@Param('id') id): any {
    return this.client.send("delete_port", id);
  }
}
