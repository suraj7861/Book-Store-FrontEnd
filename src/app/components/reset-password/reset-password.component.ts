import { Component, OnInit } from '@angular/core';
import { ResetPassword } from 'src/app/model/resetPassword';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetPassword: ResetPassword = new ResetPassword();
  constructor() { }

  ngOnInit(): void {
  }

}
