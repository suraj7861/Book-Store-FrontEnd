import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookDetails } from 'src/app/model/bookDetails';
import { Cart } from 'src/app/model/cart';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  token:any=localStorage.getItem('token');

  cartModel : Cart = new Cart();
  cartList : BookDetails[]= [];
  cartvalue:number | undefined;

  edituseraddressform!: FormGroup;
  item_qty = 1;
  step = 0;
  constructor( private formBuilder: FormBuilder,private router: Router,private cartService: CartService) { }

  ngOnInit(): void {
    this.edituseraddressform = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.pattern(/(?=^.{0,40}$)^[a-zA-Z-]+\s[a-zA-Z-]+$/g)]],
      mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],

      service: ['advance']
    });
    this.getProductOfCart();
  }
  onhome(){
    this.router.navigateByUrl('/homePage')
  }
  onplaceorder(){
    this.router.navigateByUrl('/placeOrder')
  }

  getProductOfCart(){
    this.cartService.getCart(this.token).subscribe(
      data=>{ console.log(data), this.cartList= data.books, this.cartvalue= data.Quantity},
      error=> { console.log(error)}
    );
  }

  // cartList = [
  //   { 
  //     'bookName':'Don`t Make Me Think ',
  //     'bookAuthor':'by Steve King',
  //     'bookPrice':'1500',
  //   }
  //]
}
