import { Color } from "./colors";
import { ResponseModel } from "./ResponseModel";

export interface ColorResponseModel extends ResponseModel{
    data:Color[];
}