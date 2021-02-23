import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TemplateformComponent } from '../composants/templateform/templateform.component';

@Injectable({
  providedIn: 'root'
})
export class LeaveGuard implements CanDeactivate<TemplateformComponent> {
  canDeactivate(
    component: TemplateformComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean {

      // on précise des "ou" pour les champs prénom et nom, donc cela ne fonctionnera que si on a écrit qq chose dans les deux champs
      // affichera une pop-up avec le message 
    return component.personne.nom === undefined || 
      component.personne.prenom === undefined || 
      component.personne.nom.length === 0 ||
      component.personne.prenom.length === 0 || 
      confirm('Voulez-vous vraiment quitter ce formulaire ?');
  }
  
}
