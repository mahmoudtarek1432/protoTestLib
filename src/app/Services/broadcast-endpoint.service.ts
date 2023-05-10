import { Injectable } from '@angular/core';
import { IEndpoint } from 'ngx-proto-websocket';
import { TestRequest } from '../Dto/TestRequest';
import { TestResponse } from '../Dto/TestResponse';

@Injectable({
  providedIn: 'root'
})
export class BroadcastEndpointService extends IEndpoint<TestResponse> {

  constructor() {
    super(TestResponse)
   }
}
