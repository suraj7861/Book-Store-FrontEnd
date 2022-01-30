import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseUrl: string = "http://localhost:8080/userregistration";

  constructor(private httpClient: HttpClient) { }

logIn(credentials:any){

  return this.httpClient.post(`${this.baseUrl}/userlogin`,credentials)
}

logInUser(token: string){
  localStorage.setItem("token",token);
  return true;
}

}
