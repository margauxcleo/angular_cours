import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Employe } from '../interfaces/employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  
  url:string = 'http://localhost:8080/employes/';

  employes: Array<Employe> = new Array<Employe>();
  employe: Employe = {};

  constructor(private http: HttpClient) { }

   // gestion des erreurs 
   errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  // Obtenir tout le json
  getAllEmployes() {
    // return this.http.get(this.url);
    let API_URL = `${this.url}` + "search";
    return this.http.get(API_URL);
  }

  // Ajouter un employé
  addEmploye(data: Employe){
    let API_URL = `${this.url}` + "addEmploye";
    return this.http.post(API_URL, data)
        .pipe(
          catchError(this.errorMgmt)
        )
  }

  // get sur un employé
    // getP avec les pipes 
  getE(id:number): Observable<any> {
    let API_URL = `${this.url}` + "selectEmploye" + `/${id}`;
    return this.http.get(API_URL)
      .pipe(
        map((res: any) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }


  // Mettre à jour un employé
  updateE(id:number, data:Employe): Observable<any> {
    let API_URL = `${this.url}` + "updateEmploye" + `/${id}`;
    return this.http.put(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  // Delete avec les Pipes
  deleteE(id:number): Observable<any> {
    let API_URL = `${this.url}` + "deleteEmploye" + `/${id}`;
    return this.http.delete(API_URL)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

 

}
