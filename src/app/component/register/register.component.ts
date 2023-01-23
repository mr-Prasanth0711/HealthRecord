import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { ConfirmPasswordValidator } from '../../confirm-password';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  type: String = "password";

  isText: boolean = false;

  eyeIcon: String = "fa-eye-slash";



  constructor(private fbuilder: FormBuilder, private auth: AuthService, private router: Router) {

  }
  RegisterForm = this.fbuilder.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    mobile: ['', Validators.required],
    password: ['', Validators.required],
    confirmpassword: ['', Validators.required]
  },
    {
      validator: ConfirmPasswordValidator("password", "confirmpassword")
    })

  ngOnInit(): void {

  }


  hideShowPass() {


    this.isText = !this.isText;

    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";

    this.isText ? this.type = "text" : this.type = "password";

  }

  onRegister() {
    if (this.RegisterForm.valid) {
      console.log(this.RegisterForm.value);

      this.auth.register(this.RegisterForm.value)
        .subscribe({
          next: (res) => {
            alert(res.message);
            this.RegisterForm.reset();
            this.router.navigate(['login'])

          },
          error: (err) => {
            alert(err?.error.message)

          }
        })

    } else {
      console.log("Invalid Fields");
      this.validateAllFormField(this.RegisterForm);
      alert("please fill all fields")

    }
  }


  private validateAllFormField(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control?.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormField(control);
      }
    })
  }



}
