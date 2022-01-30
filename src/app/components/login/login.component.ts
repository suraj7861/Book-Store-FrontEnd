import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials={
    emailId:"",
    password:""
  }
  constructor(private user : UserServiceService) { }

  ngOnInit(): void {
  }

  
  onsubmit(){
    if((this.credentials.emailId!='' && this.credentials.password!='') && (this.credentials.emailId!=null && this.credentials.password!= null)){
      console.log("submit the form to server");
      // token generation 
      this.user.logIn(this.credentials).subscribe(
        
        (response:any)=>{
          console.log(response)
          this.user.logInUser(response.data)
          window.location.href="/homePage"
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
