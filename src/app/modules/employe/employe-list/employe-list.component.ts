import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employe } from 'src/app/interfaces/employe';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css']
})
export class EmployeListComponent implements OnInit {

  employes: any;
  employe: Employe = {};

  constructor(private employeService: EmployeService, private router: Router) { }

  ngOnInit(): void {

    this.reloadData();
  }

  // permet d'utiliser la méthode getAllPersons via le http 
  reloadData(){
    this.employeService.getAllEmployes().subscribe(res =>{
      this.employes = res;
    })
  }

  saveEmploye(){
    this.employeService.addEmploye(this.employe).subscribe(res =>{
      console.log(res);
      this.reloadData();
    })
  }
}
