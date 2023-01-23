import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmPasswordValidator } from 'src/app/confirm-password';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-addpatients',
  templateUrl: './addpatients.component.html',
  styleUrls: ['./addpatients.component.css']
})
export class AddpatientsComponent {

  type: String = "password";

  isText: boolean = false;

  eyeIcon: String = "fa-eye-slash";



  constructor(private fbuilder: FormBuilder, private auth: AuthService, private router: Router) {

  }
  AddPatientForm = this.fbuilder.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    mobile: ['', Validators.required],
    password: ['', Validators.required]

  });


  ngOnInit(): void {

  }


  hideShowPass() {


    this.isText = !this.isText;

    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";

    this.isText ? this.type = "text" : this.type = "password";

  }

  onRegister() {
    if (this.AddPatientForm.valid) {
      console.log(this.AddPatientForm.value);

      this.auth.register(this.AddPatientForm.value)
        .subscribe({
          next: (res) => {
            alert(res.message);
            this.AddPatientForm.reset();
            this.router.navigate(['Adminadduser'])

          },
          error: (err) => {
            alert(err?.error.message)

          }
        })

    } else {
      console.log("Invalid Fields");
      this.validateAllFormField(this.AddPatientForm);
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
