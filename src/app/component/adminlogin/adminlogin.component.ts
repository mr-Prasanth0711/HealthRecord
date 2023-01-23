import { IfStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  type: String = "password";

  isText: boolean = false;

  eyeIcon: String = "fa-eye-slash";

  constructor(private fbuilder: FormBuilder, private auth: AuthService, private router: Router) {

  }

  AdminForm = this.fbuilder.group({
    username: ['', Validators.required], password: ['', Validators.required]
  })

  ngOnInit(): void {

  }
  ShowPass() {


    this.isText = !this.isText;

    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";

    this.isText ? this.type = "text" : this.type = "password";

  }

  onAdminLogin() {
    if (this.AdminForm.valid) {

      console.log(this.AdminForm.value);
      //Send obj to database

      this.auth.adminlogin(this.AdminForm.value)
        .subscribe({
          next: (res) => {
            alert(res.message)
            console.log(res.message)
            if (res.message == "you are not an Admin") {
              this.AdminForm.reset();
              this.router.navigate(['adminlogin'])
            }
            else {
              if (res.message == "Login Successfully.") {
                this.AdminForm.reset();
                this.auth.storeToken(res.token)
                this.router.navigate(['dashboard'])

              }


            }
          },
          error: (err) => {
            if (err.message == "User not found.") {
              this.AdminForm.reset();
              this.router.navigate(['adminlogin'])

            } else {
              alert(err?.error.Message)
            }

          }
        })

    } else {

      console.log("username or password is invalid")


      this.validateAllFormFields(this.AdminForm);
      alert("please fill all fields");
    }
  }



  private validateAllFormFields(formGroup: FormGroup) {

    Object.keys(formGroup.controls).forEach(field => {

      const control = formGroup.get(field);

      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });

      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }

    })
  }
}
