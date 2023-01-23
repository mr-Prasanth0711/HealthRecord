import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  type: String = "password";

  isText: boolean = false;

  eyeIcon: String = "fa-eye-slash";


  constructor(private fbuilder: FormBuilder, private auth: AuthService, private router: Router) {

  }

  LoginForm = this.fbuilder.group({
    username: ['', Validators.required], password: ['', Validators.required]
  })

  ngOnInit(): void {

  }

  hideShowPass() {


    this.isText = !this.isText;

    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";

    this.isText ? this.type = "text" : this.type = "password";

  }
  onLogin() {
    if (this.LoginForm.valid) {

      this.auth.login(this.LoginForm.value)
        .subscribe({
          next: (res) => {

            this.LoginForm.reset();
            if (res.message == "User not found.") {
              window.alert("Username or Password Invalid")
              this.LoginForm.reset();
              this.router.navigate(['login'])
            }
            else {
              this.LoginForm.reset();
              this.router.navigate(['homedashboard'])
              this.auth.storeToken(res.token)
              localStorage.setItem("name", (res.message))
              console.log(res.message);


            }
          },
          error: (err) => {
            window.alert("User not Found")
            this.router.navigate(['register'])
          }
        })

    } else {

      console.log("username or password is invalid")


      this.validateAllFormFields(this.LoginForm);
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
