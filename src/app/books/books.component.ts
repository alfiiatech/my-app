import { Component, OnInit  } from '@angular/core';
import { BooksService } from './books.service';

interface Book {
  name: string;
  autor: string;
  image: string;
  amount: number,
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];

  constructor(private booksService: BooksService) { }

  // cart: Book[] = [];

  isShowing: boolean = true;


  ngOnInit(): void { 
    this.books = this.booksService.getBooks();
    // console.log({OnInIt:"On In It"})
  }

  // addToCart(book: Book) {
  //   console.log(book)
  // }

}
