import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  Details: any = []
  searchText: any;
  page: number = 0;
  itemsPerPage: any;
  totalItems: any;

  constructor(private auth: AuthService) {

  }
  ngOnInit(): void {
    this.auth.getusers()
      .subscribe(data => {
        console.log(data);

        this.Details[0] = data;

      })
  }
  pagination(page: any) { }
}
