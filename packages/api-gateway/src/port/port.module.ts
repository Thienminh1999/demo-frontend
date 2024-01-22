import { Module } from "@nestjs/common";
import { PortController } from "./port.controller";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "PORT_MICROSERVICE",
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: "port",
            brokers: ["localhost:29092"],
          },
          producerOnlyMode: true,
          consumer: {
            groupId: "port-consumer",
          },
        },
      },
    ]),
  ],
  controllers: [PortController],
  providers: [],
})
export class PortModule {}
