import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  edituseraddressform!: FormGroup;
  item_qty = 1;
  step = 0;
  constructor( private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.edituseraddressform = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.pattern(/(?=^.{0,40}$)^[a-zA-Z-]+\s[a-zA-Z-]+$/g)]],
      mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],

      service: ['advance']
    });
  }
  onhome(){
    this.router.navigateByUrl('/homePage')
  }
  onplaceorder(){
    this.router.navigateByUrl('/placeOrder')
  }
  cartList = [
    { 
      'bookName':'Don`t Make Me Think ',
      'bookAuthor':'by Steve King',
      'bookPrice':'1500',
    }
  ]
}
