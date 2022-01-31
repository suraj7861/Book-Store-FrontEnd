import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from 'src/app/model/token';
import { UserLogin } from 'src/app/model/userlogin';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // userData : UserLogin = new UserLogin();
  fetchedToken : Token = new Token();
  islogIn:boolean = true;
  
  userData={
    emailId:"",
    password:""
  }
  constructor(private userService : UserServiceService, private router : Router) { }

  ngOnInit(): void {
    console.log(this.userData)
  }


  // onsubmit() {
  //   this.userService.loginUser(this.userData).subscribe(
  //     data=>{ console.log(data) , this.fetchedToken = data, 
  //        localStorage.setItem( "token", this.fetchedToken.token), 
  //       //  localStorage.setItem("name", this.fetchedToken.personName),
  //        window.location.href="/homePage"},
  //     error=>{ console.log(error),this.isUserLogIn()}
  //   );   
  // }

  // isUserLogIn() {
  //   this.islogIn=false;
  // }

  // isUserLoggedIn() {
  //   if(this.islogIn) {
  //     return true;
  //   }
  //   return false;
  // }

  onsubmit(){
    if((this.userData.emailId!='' && this.userData.password!='') && (this.userData.emailId!=null && this.userData.password!= null)){
      console.log("submit the form to server");
      // token generation 
      this.userService.logIn(this.userData).subscribe(
        
        (response:any)=>{
          console.log(response)
          this.userService.logInUser(response.data)
          this.router.navigate(["/homePage"])
        },
        errors=>{
        console.log(errors);

        }
      )
    }else{
      console.log("Fields are empty...!")
  }
}
}
