import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from 'src/app/interfaces/employe';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-update-employe',
  templateUrl: './update-employe.component.html',
  styleUrls: ['./update-employe.component.css']
})
export class UpdateEmployeComponent implements OnInit {

  _id!: number;
  employe!: Employe;

  constructor(private employeService: EmployeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

      // utilisation d'un snapshot pour get les infos
      this._id = this.route.snapshot.params['id'];

      this.employeService.getE(this._id)
      .subscribe( data => {
        console.log(data);
        this.employe = data.result;
      })
  }

  // mettre à jour l'employé dans la bdd
  updateEmploye(){
    const data = 
    this.employeService.updateE(this._id, this.employe).subscribe( data => {
      console.log(data);
    })
    this.router.navigateByUrl('employe/employes-list');
  }
}
