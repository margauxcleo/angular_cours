import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FilsComponent } from '../fils/fils.component';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit, AfterViewInit {

  // Le décorateur @ViewChild permet à un composant parent de récupérer les données du premier composant enfant 

  @ViewChild(FilsComponent, { static: false }) fils!: FilsComponent;

  // Le décorateur @ViewChildren permet à un composant parent de récupréer les données de tous ses composants enfants 

  @ViewChildren(FilsComponent) child!: QueryList<FilsComponent>;

  tab: Array<string> = ['premier,', 'deuxième', 'troisième'];
  nord='Lille';
  sud='Nice';
  capitale= 'Paris';

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // affiche le premier en console
    console.log(this.fils.ordre);

    // affiche tous les enfants en console
    this.child.forEach(elt => console.log(elt));
  }
}
