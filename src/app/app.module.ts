import { Injector, NgModule, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxProtoWebsocketModule, ProtobufWebsocket } from 'ngx-proto-websocket';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxProtoWebsocketModule
  ],
  providers: [
    //passes the injector into module
    {provide: NgxProtoWebsocketModule,
     useFactory:(injector:Injector) => {
      return new NgxProtoWebsocketModule(injector)
    },
    deps: [Injector]
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
