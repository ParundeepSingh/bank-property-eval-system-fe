import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Request } from '../interface/Request';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) {}

   
  requestsUrl = environment.serverUrl + '/rest/pvs-val-request/tasks';

  getPvsRequests(){
    return this.http.get<Request[]>(this.requestsUrl);
  }
}
