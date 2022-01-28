import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bookList = [
    {
      'bookImages':'./assets/bookImages/Image1.png',
      'bookName':'Don`t Make Me Think ',
      'bookAuthor':'by Steve King',
      'bookPrice':'1500',
    },
    {
      'bookImages':'./assets/bookImages/Image1.png',
      'bookName':'Don`t Make Me Think ',
      'bookAuthor':'by Steve King',
      'bookPrice':'1500',
    },
    {
      'bookImages':'./assets/bookImages/Image1.png',
      'bookName':'Don`t Make Me Think ',
      'bookAuthor':'by Steve King',
      'bookPrice':'1500',
    },
    {
      'bookImages':'./assets/bookImages/Image4.png',
      'bookName':'Don`t Make Me Think ',
      'bookAuthor':'by Steve King',
      'bookPrice':'1500',
    },
    {
      'bookImages':'./assets/bookImages/Image5.png',
      'bookName':'Don`t Make Me Think ',
      'bookAuthor':'by Steve King',
      'bookPrice':'1500',
    },
    {
      'bookImages':'./assets/bookImages/Image6.png',
      'bookName':'Don`t Make Me Think ',
      'bookAuthor':'by Steve King',
      'bookPrice':'1500',
    },
    {
      'bookImages':'./assets/bookImages/Image7.png',
      'bookName':'Don`t Make Me Think ',
      'bookAuthor':'by Steve King',
      'bookPrice':'1500',
    },
    {
      'bookImages':'./assets/bookImages/Image8.png',
      'bookName':'Don`t Make Me Think ',
      'bookAuthor':'by Steve King',
      'bookPrice':'1500',
    }
  ]

}
