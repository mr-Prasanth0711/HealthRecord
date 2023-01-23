import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  constructor(private auth: AuthService) { }

  //user=JSON.parse(this.name)
  name: any
  Details: any = []
  ngOnInit(): void {
    this.name = localStorage.getItem('name');
    console.log("user values", this.name)
    this.auth.GetDetailforDashboard(this.name).subscribe({
      next: (res) => {
        this.Details = res[0];
        console.log(res)

      }
    })


  }
}
