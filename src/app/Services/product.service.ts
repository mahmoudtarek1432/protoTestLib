import { Injectable } from '@angular/core';
import { WebsocketRequestClient } from 'ngx-proto-websocket';
import { ProductRequest } from '../Model/ProductRequest';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private protoClient:WebsocketRequestClient) { 
    
  }
  
  getProduct(productRequest:ProductRequest){
    return this.protoClient.request(productRequest);
  }
}
