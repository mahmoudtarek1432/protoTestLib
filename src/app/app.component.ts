import { Component } from '@angular/core';
import { ProtobufWebsocket } from 'ngx-proto-websocket';
import { ProductService } from './Services/product.service';
import { ProductRequest } from './Model/ProductRequest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'protoTestLib';
  
  constructor(private protoweb:ProtobufWebsocket, private products:ProductService){
    protoweb.OpenWebsocket('ws://127.0.0.1:80/test')  
  }

  requestProduct(){
    this.products.getProduct(new ProductRequest()).subscribe()
  }
}
