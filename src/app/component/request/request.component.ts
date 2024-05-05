import { Component, Input } from '@angular/core';
import { Request } from '../../interface/Request';

@Component({
  selector: 'app-request',
  standalone: true,
  imports: [],
  templateUrl: './request.component.html',
  styleUrl: './request.component.css',
})
export class RequestComponent {
  @Input() request : any;
}
