import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-personnes-list',
  templateUrl: './personnes-list.component.html',
  styleUrls: ['./personnes-list.component.css']
})
export class PersonnesListComponent implements OnInit {

  personnes: Array <Personne> = new Array <Personne>();
  personne: Personne = {}

  constructor(private personneService: PersonneService, private router: Router) { }

  ngOnInit(): void {
    // this.personnes = this.personneService.getAll();

    // ici, on appelle notre méthode reloadData à l'init donc au premier chargement de la page 
    this.reloadData();
  }

  // permet d'utiliser la méthode getAllPersons via le http 
  reloadData(){
    this.personneService.getAllPersons().subscribe(res =>{
      this.personnes = res;
    })
  }

  savePerson(){
    this.personneService.addP(this.personne).subscribe(res =>{
      console.log(res);
      this.reloadData();
    })
  }

  deletePerson(id: number){
    this.personneService.deleteP(id).subscribe(data =>{
      console.log(data);
      this.reloadData();
    })
  }

  updatePerson(id : number){
    this.router.navigate(['personne/update', id]);
  }

  showPerson(id : number){
    this.router.navigate(['personne/show', id]);
  }
}
