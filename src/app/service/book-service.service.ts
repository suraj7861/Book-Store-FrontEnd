import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BookDetails } from 'src/app/model/bookDetails';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  baseUrl: string = "http://localhost:8080/bookservice";

  constructor(private http : HttpClient) { }

  getAllBooks() {
    return this.http.get<[BookDetails]>(`${this.baseUrl}/getbooks`,{headers: new HttpHeaders({token: localStorage['token']})});
  }

  getBookById(id: number):Observable<BookDetails>{
    return this.http.get<BookDetails>(`${this.baseUrl}/getbook/${id}`);
  }


  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}
