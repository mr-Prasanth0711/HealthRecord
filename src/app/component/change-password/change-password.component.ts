import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { ConfirmPasswordValidator } from '../../confirm-password';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  constructor(private fbuilder: FormBuilder, private auth: AuthService, private router: Router) { }

  type: String = "password";

  isText: boolean = false;

  eyeIcon: String = "fa-eye-slash";

  name: any
  records: any;
  Details: any = {}

  ChangeForm = this.fbuilder.group({
    username: [this.Details.username, Validators.required],
    oldpassword: ['', Validators.required],
    newpassword: ['', Validators.required],
    confirmpassword: ['', Validators.required]
  },
    {
      validator: ConfirmPasswordValidator("newpassword", "confirmpassword")
    })
  ngOnInit(): void {


    this.name = localStorage.getItem('name');
    console.log("user values", this.name)
    this.auth.change(this.name).subscribe({
      next: (res) => {
        this.Details = res[0];
        console.log(this.Details)

      }
    })


  }
  onChange() {

    this.auth.password(this.ChangeForm.value).subscribe(res => {
      alert(res.message)
      this.router.navigateByUrl("/homedashboard")

    })
  }

  hideShowPass() {


    this.isText = !this.isText;

    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";

    this.isText ? this.type = "text" : this.type = "password";

  }
}

