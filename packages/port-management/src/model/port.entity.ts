import { Column, Entity } from "typeorm";
import { BaseEntity } from "./base.entity";

@Entity('port')
export class Port extends BaseEntity {
  @Column({ name: "country", type: "varchar", length: 300 })
  country: string;

  @Column({ name: "name", type: "varchar", length: 300 })
  name: string;

  @Column({ name: "port_code", type: "varchar", length: 300 })
  portCode: string;

  @Column({ name: "vessels_in_port", type: "decimal" })
  vesselsInPort: number;

  @Column({ name: "departures", type: "decimal" })
  departures: number;

  @Column({ name: "arrivals", type: "decimal" })
  arrivals: number;

  @Column({ name: "type", type: "varchar", length: 300  })
  type: string;

  @Column({ name: "area_local", type: "varchar", length: 300 })
  areaLocal: string;

  @Column({ name: "area_global", type: "varchar", length: 300})
  areaGlobal: string;

  @Column({ name: "other_port_names", type: "varchar", length: 300})
  otherPortNames: string;
}
