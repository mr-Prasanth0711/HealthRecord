import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { edit } from '../Model/edit';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-editdetails',
  templateUrl: './editdetails.component.html',
  styleUrls: ['./editdetails.component.css']
})
export class EditdetailsComponent {


  constructor(private formbuilder: FormBuilder, private auth: AuthService, private router: Router, private route: ActivatedRoute) {

  }

  Details: edit = {
    firstname: "",
    lastname: "",
    dateofbirth: "",
    age: "",
    gender: "",
    bloodgroup: "",
    height: "",
    weight: "",
    bloodpressure: "",
    diseases: "",
    email: "",
    street: "",
    landmark: "",
    city: "",
    pincode: "",
    mobileno: "",

  };

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        console.log(params);
        const name = params.get("firstname");
        console.log(name);
        if (name) {
          this.auth.GetDetailforDashboard(name).subscribe({
            next: (response) => {
              console.log("next stage", response);
              this.Details = response[0];
            }
          })
        }
      }
    })
  }
  saveChange() {
    this.auth.saveedit(this.Details)
      .subscribe({
        next: (res) => {
          alert(res.message);
          this.router.navigate(['UserDetails'])

        },
        error: (err) => {
          alert(err?.error.message)

        }
      })
  }



}

