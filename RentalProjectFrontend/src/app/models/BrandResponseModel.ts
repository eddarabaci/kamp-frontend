import { Brand } from "./brands";
import { ResponseModel } from "./ResponseModel";

export interface BrandResponseModel extends ResponseModel{
    data:Brand[];

}