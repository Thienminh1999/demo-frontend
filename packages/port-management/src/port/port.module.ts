import { Module } from "@nestjs/common";
import { PortController } from "./port.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PortService } from "./port.service";
import { Port } from "../model/port.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Port])],
  controllers: [PortController],
  providers: [PortService]
})
export class PortModule { }
