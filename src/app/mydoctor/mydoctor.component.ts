import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-mydoctor',
  templateUrl: './mydoctor.component.html',
  styleUrls: ['./mydoctor.component.css']
})
export class MydoctorComponent {
  constructor(private auth: AuthService) { }

  DowloadFile(file:any){
    this.auth.FileDownload(file).subscribe(response=>{
      let blob:Blob=response.body as Blob;
      let url=window.URL.createObjectURL(blob)
      let a=document.createElement('a')
     a.download=file;
     a.href=url;
     a.click();
    }
    )
  }

  name: any
  records: any;
  Details: any = []
  ngOnInit(): void {
    this.name = localStorage.getItem('name');
    console.log("user values", this.name)
    this.auth.doctor(this.name).subscribe({
      next: (res) => {
        this.Details[0] = res;
        console.log(this.Details)

      }
    })


  }
  
}
