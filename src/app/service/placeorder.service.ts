import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceorderService {

  baseUrl: string = "http://localhost:8080/order";

  constructor(private http : HttpClient) { }
}
