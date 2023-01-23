import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-add-basic-details',
  templateUrl: './admin-add-basic-details.component.html',
  styleUrls: ['./admin-add-basic-details.component.css']
})
export class AdminAddBasicDetailsComponent {
  Details: any = []
  searchText: any;
  page: number = 0;
  itemsPerPage: any;
  totalItems: any;


  constructor(private auth: AuthService) {

  }
  ngOnInit(): void {
    this.auth.getRecords()
      .subscribe(data => {
        console.log(data);

        this.Details[0] = data;

      })
  }
  pagination(page: any) { }
}
