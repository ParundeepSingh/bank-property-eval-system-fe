import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { RequestsComponent } from './component/requests/requests.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RequestsComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public isCollapsed = true;
  title = 'bank-property-eval-system';

}
