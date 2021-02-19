import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeRoutingModule } from './employe-routing.module';
import { FormsModule } from '@angular/forms';
import { EmployeListComponent } from './employe-list/employe-list.component';
import { UpdateEmployeComponent } from './update-employe/update-employe.component';


@NgModule({
  declarations: [EmployeListComponent, UpdateEmployeComponent],
  imports: [
    CommonModule,
    EmployeRoutingModule,
    FormsModule
  ]
})
export class EmployeModule { }
