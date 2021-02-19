import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonneRoutingModule } from './personne-routing.module';
import { PersonnesListComponent } from './personnes-list/personnes-list.component';
import { FormsModule } from '@angular/forms';
import { UpdatePersonneComponent } from './update-personne/update-personne.component';
import { PersonneDetailsComponent } from './personne-details/personne-details.component';


@NgModule({
  declarations: [PersonnesListComponent, UpdatePersonneComponent, PersonneDetailsComponent],
  imports: [
    CommonModule,
    PersonneRoutingModule,
    FormsModule
  ]
})
export class PersonneModule { }
