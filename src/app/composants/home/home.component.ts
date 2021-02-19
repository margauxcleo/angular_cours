import { Component, OnInit } from '@angular/core';
import { Personne } from '../../classes/personne';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'angular-front-end';

  nom="Doe";

  couleur="blue";


  libelleFormation = 'POEC FRONT';
  // ici, on crée personne => avec le type la classe Personne 
  personne: Personne = new Personne(100, 'Wick', 'John');

  personnes: Array<Personne> = [
    new Personne(100, 'Wick', 'John'),
    new Personne(101, 'Stark', 'Tony'),
    new Personne(102, 'Ventura', 'Ace'),
    new Personne(103, 'Dupont', 'Jean'),
  ];
  // ici, on crée tab => avec le type un array de nombres
  tab:number[] = [3, 2, 6, 5, 11, 14, 18, 13];

  // Exo Pipe object
  person: any = {
    nom: 'john', 
    prenom: 'pat'
  }

  // Exo Pipe array
  collection: string[] = ['a', 'b', 'c', 'd'];

  direBonjour(){
    return 'Bonjour Angular';
  }

  getColor(){
    return 'white';
  }

  getBackgroundColor(){
    return 'red';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
