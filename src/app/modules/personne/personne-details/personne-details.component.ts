import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-personne-details',
  templateUrl: './personne-details.component.html',
  styleUrls: ['./personne-details.component.css']
})
export class PersonneDetailsComponent implements OnInit {

  id!: number;
  personne!: Personne;

  constructor(private personneService: PersonneService, private router: Router, private route: ActivatedRoute) { }

  // ngOnInit(): void {
  //   this.id = this.route.snapshot.params['id'];

  //   this.personneService.showP(this.id).subscribe( data => {
  //     console.log(data);
  //     this.personne = data;
  //   })
  // }

  // retour page accueil personne
  // backHomePage(){
  //   this.router.navigateByUrl('personne/personnes-list');
  // }

  // correction 
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personneService.getP(this.id)
      .subscribe(data => {
        console.log(data)
        this.personne = data;
      });
  }
}



