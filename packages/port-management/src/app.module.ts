import { Module } from "@nestjs/common";

import { PortModule } from "./port/port.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Port } from "./model/port.entity";

@Module({
  imports: [
    PortModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 54320,
      username: "user",
      password: "admin",
      database: "demo-fe-db",
      entities: [Port],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
