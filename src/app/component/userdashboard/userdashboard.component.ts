import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent {

  public user: any = [];
  public username: string = "";
  constructor(private auth: AuthService) {



  }
  ngOnInit() {
    this.user = localStorage.getItem('name')

  }
  logout() {
    this.auth.logout();
  }
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

