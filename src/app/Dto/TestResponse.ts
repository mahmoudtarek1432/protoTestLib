import { IResponse } from "ngx-proto-websocket";

export class TestResponse extends IResponse{
    Name?:string
    Version?:number;
    price?:string[];
}