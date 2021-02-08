import { Component, OnInit } from '@angular/core';
import { Personne } from '../../interfaces/personne';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  // on déclare la variable personnes comprenant un array vide 
  personnes:Array<Personne> = [];
  personne: Personne = {}
  
  nom = "";
  constructor() { }

  ngOnInit(): void {
  }

  ajouterPersonne(){
    // on utilse le rest operator pour retourner les données dans un array 
     this.personnes.push({ ...this.personne });
     this.personne.nom = '';
     this.personne.prenom = '';
     console.log(this.personnes);
  }

  supprimerPersonne(personne: Personne){
    const index: number = this.personnes.indexOf(personne);
    this.personnes.splice(index, 1);
  }

// Modifier le composant formulaire pour afficher les personnes
// ajoutees en-dessous du formulaire
// A chaque ajout, la nouvelle personne ajoutee apparaıt comme
// dernier element de la liste des personnes (affichee en-dessous du
// formulaire)

  // -----exemple avec l'ajout d'un bouton et le one way binding
  // result = "";
  // constructor() { }

  // ngOnInit(): void {
  // }

  // direBonjour(nom:string) {
  //   this.result = nom;
  // }

}
