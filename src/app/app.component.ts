import { Component } from '@angular/core';
import { ProtobufWebsocket } from 'ngx-proto-websocket';
import { ProductService } from './Services/product.service';
import { TestRequest } from './Dto/TestRequest';
import { BroadcastEndpointService } from './Services/broadcast-endpoint.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'protoTestLib';
  
  constructor(private protoweb:ProtobufWebsocket, private products:ProductService, private BroadcastEndpoint: BroadcastEndpointService){
    protoweb.OpenWebsocket('ws://127.0.0.1:80/test')  
  }

  requestProduct(){
    this.products.getProduct(new TestRequest()).subscribe(r => console.log(r))
  }

  subscribeToBroadcast(){
    this.BroadcastEndpoint.SubscribeToBroadcast(new TestRequest()).subscribe(r => console.log(r))
  }

  testRequest(){
    var test = new TestRequest()
    test.Id = "1"
  }
}
