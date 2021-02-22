import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  setLogOut() {
    if (localStorage.getItem('isConnected') === 'true') {
      localStorage.removeItem('isConnected');
      this.router.navigate(['/home']);
    } 
  }

  isConnected(){
    //  on utilise Boolean pour préciser qu'ici il s'agit d'un booleen 
    if(Boolean(localStorage.getItem('isConnected'))) {
      return true; 
    } else {
      return false;
    }
  }

}
