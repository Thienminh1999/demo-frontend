import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app
    .listen(3000)
    .then(() => console.log("api-gateway is running on port 3000"));
}
bootstrap();
