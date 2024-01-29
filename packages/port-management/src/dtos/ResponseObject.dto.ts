import { IsNotEmpty, IsString } from "class-validator";

export interface ResponseObject<T> {
    status: number;
    result: T;
}