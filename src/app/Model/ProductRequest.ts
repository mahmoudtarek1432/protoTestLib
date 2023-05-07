import { IRequest } from "ngx-proto-websocket";

export class ProductRequest extends IRequest{
    Name?:string
    Description?:string;
    price?:number;
}