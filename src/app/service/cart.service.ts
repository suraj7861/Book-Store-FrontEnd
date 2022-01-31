import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseUrl: string = "http://localhost:8080/cart";

  constructor(private http : HttpClient) { }
}
