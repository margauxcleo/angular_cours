import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculette',
  templateUrl: './calculette.component.html',
  styleUrls: ['./calculette.component.css']
})
export class CalculetteComponent implements OnInit {

  number1:number = 0;
  number2:number = 0;
  result:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  additionner() {
    this.result = this.number1 + this.number2;
  }

  soustraire() {
    this.result = this.number1 - this.number2;
  }

  multiplier(){
    this.result = this.number1 * this.number2;
  }

  diviser(){
    this.result = this.number1 / this.number2;
  }

}

// CORRECTION
// num1!: number;
// 	num2!: number;
// 	result!: number;
// 	sum() {
// 		this.result = this.num1 + this.num2;
// 	}
// 	diff() {
// 		this.result = this.num1 - this.num2;
// 	}
// 	mult() {
// 		this.result = this.num1 * this.num2;
// 	}
// 	div() {
// 		this.result = this.num1 / this.num2;
// 	}
