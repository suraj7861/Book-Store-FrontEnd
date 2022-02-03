import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from '../model/cart';
import { CartResponse } from '../model/cartResponse';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseUrl: string = "http://localhost:8080/cart";

  constructor(private http : HttpClient) { }

  // addToCart(token:string, bookId:number, cart:Cart):Observable<Object>{
  //   return this.http.post<Object>(`${this.baseUrl}/add`,{headers: new HttpHeaders({token})},bookId,cart);
  // }

  getCart(token:string):Observable<CartResponse>{
    return this.http.get<CartResponse>(`${this.baseUrl}/get`,{headers: new HttpHeaders({token})});
  }
}
