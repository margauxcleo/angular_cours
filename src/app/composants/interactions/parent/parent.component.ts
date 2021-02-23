import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  moyenne = 0;
  somme = 0;
  nbr = 0;
  enfants = ['Jean', 'Julie', 'Pat'];

  constructor() { }

  ngOnInit(): void {
  }

  computeAvg(note: number) {
    this.somme += note;
    this.nbr++;
    this.moyenne = this.somme / this.nbr;
  }

}
