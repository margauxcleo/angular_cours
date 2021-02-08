import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { ErrorComponent } from './composants/error/error.component';
import { HomeComponent } from './composants/home/home.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { TemplateformComponent } from './composants/templateform/templateform.component';


// redirectTo: '/home": nous utilisons cette propriété dans le tableau routes pour indiquer au service de routage si les utilisateurs naviguent vers l'URL vide,
// ils doivent être redirigés vers l'URL d'accueil plutôt que vers l'URL vide.

//pathMatch: 'full': Cette propriété commande à Angular qu'une URL vide doit correspondre au chemin de chaîne exact et non une chaîne partiellement vide.
 
// Déclaration d'un tableau de routes appelés le module principal 
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'stagiaire', component: StagiaireComponent },
  { path:'stagiaire/:nom/:prenom', component: StagiaireComponent },
  { path: 'template-form', component: TemplateformComponent },
  { path: 'adresse', component: AdresseComponent },
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
