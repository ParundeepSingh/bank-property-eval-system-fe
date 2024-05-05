import { Routes } from '@angular/router';
import { RequestsComponent } from './component/requests/requests.component';
import { NewValuationComponent } from './component/new-valuation/new-valuation.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'new-valuation'},
    {path: 'pvs-requests', component: RequestsComponent},
    {path: 'new-valuation', component: NewValuationComponent}
];
