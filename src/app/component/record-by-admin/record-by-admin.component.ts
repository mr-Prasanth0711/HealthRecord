import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-record-by-admin',
  templateUrl: './record-by-admin.component.html',
  styleUrls: ['./record-by-admin.component.css']
})
export class RecordByAdminComponent {
  constructor(private auth: AuthService, private fbuilder: FormBuilder, private router: Router) {

  }
  file: any;
  onchange(event: any) {
    this.file = event.target.files[0];
    console.log("File", this.file)
  }

  RecordForm = this.fbuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    recordtype: ['', Validators.required],
    doctorname: ['', Validators.required],
    problem: ['', Validators.required],
    address: ['', Validators.required],
    lastdate: ['', Validators.required],
    nextdate: ['', Validators.required]
  })

  onRecord() {
    if (this.RecordForm.valid) {
      console.log(this.RecordForm.value);

      this.auth.Record(this.RecordForm.value)
        .subscribe({
          next: (res) => {
            alert(res.message);
            this.RecordForm.reset();
            this.router.navigate(['adminAddBasic'])

          },
          error: (err) => {
            alert(err?.error.message)

          }
        })

    } else {
      console.log("Invalid Fields");

      alert("please fill all fields")

    }
    if (this.file) {
      this.auth.fileupdate(this.file)
        .subscribe(
          res => {
            alert(res.message)
          },
        )
    }

  }



}
