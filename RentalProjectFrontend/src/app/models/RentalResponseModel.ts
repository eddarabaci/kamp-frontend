import { Rental } from "./rentals";
import { ResponseModel } from "./ResponseModel";

export interface RentalResponseModel extends ResponseModel{
    data: Rental[];
}