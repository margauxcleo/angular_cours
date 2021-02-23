import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {

  // Le décorateur @Input permet à un compasant fils de récupérer des données de son composant parent
  @Input() ordre!: string;
  @Input() villeNaissance!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
