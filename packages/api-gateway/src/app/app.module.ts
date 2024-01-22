import { Module } from "@nestjs/common";
import { PortModule } from "src/port/port.module";

@Module({
  imports: [PortModule],
})
export class AppModule {}
