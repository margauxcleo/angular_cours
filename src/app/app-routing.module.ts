import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { CalculetteComponent } from './composants/calculette/calculette.component';
import { ErrorComponent } from './composants/error/error.component';
import { HomeComponent } from './composants/home/home.component';
import { AddressFormComponent } from './composants/materials/address-form/address-form.component';
import { DashboardComponent } from './composants/materials/dashboard/dashboard.component';
import { DragdropComponent } from './composants/materials/dragdrop/dragdrop.component';
import { NavigationComponent } from './composants/materials/navigation/navigation.component';
import { TableComponent } from './composants/materials/table/table.component';
import { ReactiveFormComponent } from './composants/reactive-form/reactive-form.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { TemplateformComponent } from './composants/templateform/templateform.component';
import { TpFormComponent } from './composants/tp-form/tp-form.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthComponent } from './composants/auth/auth.component';
import { LeaveGuard } from './guards/leave.guard';
import { PereComponent } from './composants/interactions/pere/pere.component';
import { FilsComponent } from './composants/interactions/fils/fils.component';
import { ParentComponent } from './composants/interactions/parent/parent.component';
import { DeveloperComponent } from './composants/interactions/tp/developer/developer.component';


// redirectTo: '/home": nous utilisons cette propriété dans le tableau routes pour indiquer au service de routage si les utilisateurs naviguent vers l'URL vide,
// ils doivent être redirigés vers l'URL d'accueil plutôt que vers l'URL vide.

//pathMatch: 'full': Cette propriété commande à Angular qu'une URL vide doit correspondre au chemin de chaîne exact et non une chaîne partiellement vide.
 
// Déclaration d'un tableau de routes appelés le module principal 
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'stagiaire', component: StagiaireComponent },
  { path:'stagiaire/:nom/:prenom', component: StagiaireComponent },
  { path: 'template-form', component: TemplateformComponent, canDeactivate: [LeaveGuard] },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'tp-form', component: TpFormComponent },
  
  // mise en place de la guard : pr que tout le monde n'ai pas accès à Adresse
  { path: 'adresse', component: AdresseComponent, canActivate: [AuthGuard]},
  { path: 'auth', component: AuthComponent },

  { path: 'calculette', component: CalculetteComponent },

  { path: 'dragdrop', component : DragdropComponent },
  { path: 'dashboard', component : DashboardComponent },
  { path: 'table', component : TableComponent },
  { path: 'navigation', component : NavigationComponent },
  { path: 'address-form', component: AddressFormComponent},

  // lazy-loading: charge les routes placées dans le fichier de routing de vehicule à la demande 
  { path: 'vehicule', loadChildren: './modules/vehicule/vehicule.module#VehiculeModule'},

  // lazy loading module personne
  { path: 'personne', loadChildren: './modules/personne/personne.module#PersonneModule'},

  // lazy loading module employés
  { path: 'employe', loadChildren: './modules/employe/employe.module#EmployeModule'},

  // exo interactions père/fils 
  { path: 'pere', component: PereComponent},
  
  // exo intéractions parent/child 
  { path: 'parent', component: ParentComponent},

  // tp interactions developer/skill
  { path: 'developer', component: DeveloperComponent},


  { path: 'error', component: ErrorComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // full = mot exact, ici 'home'
  { path: '**', redirectTo: '/error' } // path error => "**" => n'importe quel contenu 
];
// on indique le component home sur deux paths => / et /home
// on arrivera sur le component home sur ces deux chemins

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
