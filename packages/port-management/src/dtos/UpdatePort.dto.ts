import { IsNotEmpty, IsString } from "class-validator";

export class UpdatePort {
    @IsString()
    @IsNotEmpty()
    id: string;

    @IsString()
    @IsNotEmpty()
    country: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    vesselsInPort: number;

    @IsString()
    @IsNotEmpty()
    portCode: string;

    @IsString()
    departures: number;
    
    @IsString()
    @IsNotEmpty()
    arrivals: number;

    @IsString()
    @IsNotEmpty()
    type: string;

    @IsString()
    @IsNotEmpty()
    areaLocal: string;

    @IsString()
    @IsNotEmpty()
    areaGlobal: string;

    @IsString()
    @IsNotEmpty()
    otherPortNames: string;
}