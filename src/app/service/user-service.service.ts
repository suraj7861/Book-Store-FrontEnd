import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../model/userlogin';
import { Observable } from 'rxjs';
import { Token } from '../model/token';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseUrl: string = "http://localhost:8080/userregistration";

  constructor(private http: HttpClient) { }

  logIn(userData:any){

    return this.http.post(`${this.baseUrl}/userlogin`,userData)
  }

  logInUser(token: string){
    // localStorage.setItem("token",token);
    localStorage.setItem("token",JSON.stringify(token))
    return true;
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  // loginUser(userData: UserLogin): Observable<Token> {
  //   return this.http.post<Token>(`${this.baseUrl}/userlogin`, userData);
  // }
  // isLoggedIn() {
  //   return !!localStorage.getItem('token');
  // }

}
