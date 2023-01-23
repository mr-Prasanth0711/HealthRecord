import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-editmydoctor',
  templateUrl: './editmydoctor.component.html',
  styleUrls: ['./editmydoctor.component.css']
})
export class EditmydoctorComponent {


  constructor(private formbuilder: FormBuilder, private auth: AuthService, private router: Router, private route: ActivatedRoute) { }

  Details: any;
  file: any;
  onchange(event: any) {
    this.file = event.target.files[0];
    console.log("File", this.file)
  }
  ngOnInit(): void {

    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get("id");
        if (id) {
          this.auth.viewdoctor(id).subscribe({
            next: (response) => {
              console.log(response);
              this.Details = response[0];
              console.log(response);

            }
          })
        }
      }
    })
  }

  saveChange() {
    this.auth.savedoctor(this.Details)
      .subscribe({
        next: (res) => {
          alert(res.message);
          this.router.navigate(['mydoctor'])

        },
        error: (err) => {
          alert(err?.error.message)

        }
 })
  if (this.file) {
      this.auth.fileupdate(this.file)
        .subscribe(
          res => {
            alert(res.message)
          })
    }

  }

}
