import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../service/requests.service';
import { CommonModule } from '@angular/common';
import { Request } from '../../interface/Request';
import { RequestComponent } from '../request/request.component';

@Component({
  selector: 'app-requests',
  standalone: true,
  imports: [CommonModule, RequestComponent],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.css',
})
export class RequestsComponent implements OnInit{
  constructor(private requestsService: RequestsService) {
  
  }

  requests: Request[] = [];

  ngOnInit(): void {
    this.getRequests();
  }

  getRequests() {
    this.requestsService.getPvsRequests().subscribe((data: Request[]) => {
      
      this.requests = data;
      console.log('data : ', data);
      console.log('requests : ', typeof(this.requests[0]));
    });
  }
}
