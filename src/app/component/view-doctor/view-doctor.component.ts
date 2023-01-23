import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.css']
})
export class ViewDoctorComponent {
  constructor(private formbuilder: FormBuilder, private auth: AuthService, private router: Router, private route: ActivatedRoute) {

  }
  Details: any;
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        console.log(params);
        const id = params.get("id");
        console.log(id);
        if (id) {
          this.auth.viewdoctor(id).subscribe({
            next: (response) => {
              console.log("next stage", response);
              this.Details = response[0];
              console.log(response);

            }
          })
        }
      }
    })
  }

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
}
