import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookDetails } from 'src/app/model/bookDetails';
import { BookServiceService } from 'src/app/service/book-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  bookList:BookDetails[]=[];
  totalBooks:number | undefined;
  constructor(private bookService: BookServiceService, private router : Router) { }

  ngOnInit(): void {
    this.getBookDetail();
  }

  getBookDetail() {
    this.bookService.getAllBooks().subscribe( bookdata => {
      console.log(bookdata);
      this.bookList=bookdata;
      console.log(this.bookList);
      this.totalBooks= bookdata.length;
    });
  }



  // bookList = [
  //   {
  //     'bookLogo':'./assets/bookImages/Image1.png',
  //     'bookName':'Don`t Make Me Think ',
  //     'bookAuthor':'by Steve King',
  //     'bookPrice':'1500',
  //   },
  //   {
  //     'bookLogo':'./assets/bookImages/Image1.png',
  //     'bookName':'Don`t Make Me Think ',
  //     'bookAuthor':'by Steve King',
  //     'bookPrice':'1500',
  //   },
  //   {
  //     'bookLogo':'./assets/bookImages/Image1.png',
  //     'bookName':'Don`t Make Me Think ',
  //     'bookAuthor':'by Steve King',
  //     'bookPrice':'1500',
  //   },
  //   {
  //     'bookLogo':'./assets/bookImages/Image4.png',
  //     'bookName':'Don`t Make Me Think ',
  //     'bookAuthor':'by Steve King',
  //     'bookPrice':'1500',
  //   },
  //   {
  //     'bookLogo':'./assets/bookImages/Image5.png',
  //     'bookName':'Don`t Make Me Think ',
  //     'bookAuthor':'by Steve King',
  //     'bookPrice':'1500',
  //   },
  //   {
  //     'bookLogo':'./assets/bookImages/Image6.png',
  //     'bookName':'Don`t Make Me Think ',
  //     'bookAuthor':'by Steve King',
  //     'bookPrice':'1500',
  //   },
  //   {
  //     'bookLogo':'./assets/bookImages/Image7.png',
  //     'bookName':'Don`t Make Me Think ',
  //     'bookAuthor':'by Steve King',
  //     'bookPrice':'1500',
  //   },
  //   {
  //     'bookLogo':'./assets/bookImages/Image8.png',
  //     'bookName':'Don`t Make Me Think ',
  //     'bookAuthor':'by Steve King',
  //     'bookPrice':'1500',
  //   }
  // ]

}
