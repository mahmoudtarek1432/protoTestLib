import { Component } from '@angular/core';
import { ProtobufWebsocket } from 'ngx-proto-websocket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'protoTestLib';
  
  constructor(private protoweb:ProtobufWebsocket){
    protoweb.OpenWebsocket('ws://127.0.0.1:80/test')  }
}
