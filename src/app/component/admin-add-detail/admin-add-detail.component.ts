import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-add-detail',
  templateUrl: './admin-add-detail.component.html',
  styleUrls: ['./admin-add-detail.component.css']
})
export class AdminAddDetailComponent {
  constructor(private formbuilder: FormBuilder, private auth: AuthService, private router: Router) {

  }

  DetailForm = this.formbuilder.group({

    firstname: this.formbuilder.control('', Validators.required),
    lastname: this.formbuilder.control('', Validators.required),
    dateofbirth: this.formbuilder.control('', Validators.required),
    age: this.formbuilder.control('', Validators.required),
    gender: this.formbuilder.control('', Validators.required),
    bloodgroup: this.formbuilder.control('', Validators.required),
    height: this.formbuilder.control('', Validators.required),
    weight: this.formbuilder.control('', Validators.required),
    bloodpressure: this.formbuilder.control('', Validators.required),
    email: this.formbuilder.control('', Validators.required),
    street: this.formbuilder.control('', Validators.required),
    landmark: this.formbuilder.control('', Validators.required),
    city: this.formbuilder.control('', Validators.required),
    pincode: this.formbuilder.control('', Validators.required),
    mobileno: this.formbuilder.control('', Validators.required)


  })



  onDatas() {
    if (this.DetailForm.valid) {
      this.auth.basicdetail(this.DetailForm.value)
        .subscribe({
          next: (res) => {


            this.DetailForm.reset();

            this.router.navigate(['RecordAdmin'])

          },
          error: (err) => {
            alert(err?.error.message)

          }
        })

    } else {
      console.log("Invalid Fields");
      alert("please fill all fields")

    }
  }
}
