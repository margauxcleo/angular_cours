import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from 'src/app/interfaces/employe';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-employe-details',
  templateUrl: './employe-details.component.html',
  styleUrls: ['./employe-details.component.css']
})
export class EmployeDetailsComponent implements OnInit {

  _id!: number;
  employe!: Employe;

  constructor(private employeService: EmployeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.params['id'];
    
    this.employeService.getE(this._id)
      .subscribe(data => {
        console.log(data)
        this.employe = data.result;
      });
  }

}
