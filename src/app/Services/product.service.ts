import { Injectable } from '@angular/core';
import { WebsocketRequestClient } from 'ngx-proto-websocket';
import { TestRequest } from '../Dto/TestRequest';
import { Observable } from 'rxjs';
import { TestResponse } from '../Dto/TestResponse';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private protoClient:WebsocketRequestClient) { 
    
  }
  
  getProduct(productRequest:TestRequest):Observable<TestResponse>{
    return this.protoClient.request(productRequest);
  }
}
