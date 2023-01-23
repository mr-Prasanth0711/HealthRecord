import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Detail } from 'src/app/Model/Details';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-detailstable',
  templateUrl: './detailstable.component.html',
  styleUrls: ['./detailstable.component.css']
})
export class DetailstableComponent implements OnInit, AfterViewInit {
  Details: any = []
  searchText: any;
  page: number = 0;
  itemsPerPage: any;
  totalItems: any;

  constructor(private auth: AuthService) {

  }

  displayedColumns: string[] = ['id', 'firstname', 'gender', 'bloodgroup', 'height', 'weight', 'bloodpressure', 'city', 'mobileno'];
  dataSource = new MatTableDataSource<Detail>(this.Details);


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }


  ngOnInit(): void {
    this.auth.getbasicDetails()
      .subscribe(data => {
        console.log(data);

        this.Details = data;

      })
  }
  pagination(page: any) { }


}
