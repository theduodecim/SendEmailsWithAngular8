import { Component, OnInit } from '@angular/core';
import { AuthEmailService } from '../shared/auth-email.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import Swal from "sweetalert2";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public userForm: FormGroup;
  public submitted = false;
  constructor(public authEmail: AuthEmailService, public fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.userForm.controls; }


  public onSubmit() {
    // stop here if form is invalid
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    Swal.fire({
      title: "Espere",
      text: 'Registro en proceso',
      type: 'info'
      // tslint:disable-next-line:no-shadowed-variable
    });
    Swal.showLoading();

    // tslint:disable-next-line:prefer-const
    console.log('Send');
    this.authEmail.sendEmail(this.userForm.value).subscribe(resp => {
      Swal.fire({
        title: this.f.name.value,
        text: 'Se envio un Email de confirmación',
        type: 'success'
        // tslint:disable-next-line:no-shadowed-variable
      });
    });

    console.log('Send');
  }


}
