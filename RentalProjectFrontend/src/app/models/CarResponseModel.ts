import { Car } from "./cars";
import { ResponseModel } from "./ResponseModel";

export interface CarResponseModel extends ResponseModel{
    data:Car[];
}