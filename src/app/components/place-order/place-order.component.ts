import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  onhomepage(){
    this.router.navigateByUrl('/homePage')
  }

}
