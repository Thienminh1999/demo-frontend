import { IsNotEmpty, IsString } from "class-validator";

export class DeletePort {
    @IsString()
    @IsNotEmpty()
    id: string;
}