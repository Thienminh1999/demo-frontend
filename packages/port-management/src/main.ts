import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Transport } from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ["localhost:29092"],
      },
      consumer: {
        groupId: "port-consumer",
      },
    },
  });
  app.listen().then(() => console.log("Microservice Port is running"));
}
bootstrap();
