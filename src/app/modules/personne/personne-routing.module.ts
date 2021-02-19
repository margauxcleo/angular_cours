import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonneDetailsComponent } from './personne-details/personne-details.component';
import { PersonnesListComponent } from './personnes-list/personnes-list.component';
import { UpdatePersonneComponent } from './update-personne/update-personne.component';

const routes: Routes = [
  { path: '', component: PersonnesListComponent},
  { path: 'personnes-list', component: PersonnesListComponent},
  { path: 'update/:id', component: UpdatePersonneComponent },
  { path: 'show/:id', component: PersonneDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonneRoutingModule { }
