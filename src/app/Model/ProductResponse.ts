import { IResponse } from "ngx-proto-websocket";

export class ProductResponse extends IResponse{
    Name?:string
    Description?:string;
    price?:number;
}