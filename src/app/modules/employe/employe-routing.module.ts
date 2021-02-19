import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeDetailsComponent } from './employe-details/employe-details.component';
import { EmployeListComponent } from './employe-list/employe-list.component';
import { UpdateEmployeComponent } from './update-employe/update-employe.component';

const routes: Routes = [
  { path: '', component: EmployeListComponent},
  { path: 'employes-list', component: EmployeListComponent},
  { path: 'update/:id', component: UpdateEmployeComponent },
  { path: 'show/:id', component: EmployeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeRoutingModule { }
