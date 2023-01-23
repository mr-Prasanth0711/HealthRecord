import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  type: String = "password";

  isText: boolean = false;

  eyeIcon: String = "fa-eye-slash";

  ShowPass() {


    this.isText = !this.isText;

    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";

    this.isText ? this.type = "text" : this.type = "password";

  }


  email: any;
  constructor(private fbuilder: FormBuilder, private auth: AuthService, private router: Router) {

  }

  ForgotForm = this.fbuilder.group({
    email: ['', Validators.required]
  })

  ConfirmForm = this.fbuilder.group({
    otp: ['', Validators.required],
    newPassword: ['', Validators.required]
  })

  ngOnInit(): void {

  }


  onSendOtp() {


    if (this.ForgotForm.valid) {
      this.auth.forgotpassword(this.ForgotForm.value)
        .subscribe({
          next: (res) => {
            alert(res.message)
            this.ForgotForm.reset();
          },
          error: (err) => {
            alert(err.error.Message)

          }
        })

    } else {


      this.validateAllFormField(this.ForgotForm);

      alert("please enter the email");
    }
  }

  onForgot() {
    if (this.ConfirmForm.valid) {

      console.log(this.ConfirmForm.value);


      this.auth.confirmForgotPassword(this.ConfirmForm.value)
        .subscribe({
          next: (res) => {
            alert(res.message)
            this.ConfirmForm.reset();
            this.router.navigateByUrl('/login')

          },
          error: (err) => {
            alert(err.error.Message)

          }
        })

    } else {
      this.validateAllFormField(this.ConfirmForm)
      alert("please enter valid OTP or Password");
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
