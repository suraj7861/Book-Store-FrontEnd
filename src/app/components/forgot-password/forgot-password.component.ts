import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  passwordResetForm!: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder,private router : Router) { }

  ngOnInit(): void {
    this.passwordResetForm = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.email]],   
    });
  }
  onSubmit(){
    this.router.navigate(["/resetPassword"])
  }
}
