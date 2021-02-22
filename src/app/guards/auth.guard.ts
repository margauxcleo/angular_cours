import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// CanActivate ne fait aucun contrôle car elle retourne toujours true 
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    // de base :
    // ActivatedRouteSnapshot contient des infos commes les params envoyés pour la route demandée
    // route: ActivatedRouteSnapshot,
    // RouterStateSnapshot contient des infos comme l'URL de la route demandée
    // state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;

    // pour l'exo:
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (Boolean(localStorage.getItem('isConnected'))) {
        return true; 
      } else {
        this.router.navigateByUrl('/auth');
        return false;
      }
    }
    
}
