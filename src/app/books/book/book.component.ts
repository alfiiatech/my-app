import { Component , OnInit, Input, Output,EventEmitter, OnDestroy } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Book } from 'src/app/types/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnDestroy {

  @Input() book: Book = {} as Book;
  @Output() bookEmitter = new EventEmitter<Book>();

  IsInCart:boolean = false ;

  myInterval:any = null;

  constructor(private cartService: CartService) { }

  ngOnDestroy(): void {
    // clearInterval(this.myInterval);
    // console.log({OnDestroy:"OnDestroy"})
  }

  ngOnInit(): void { 
    // setInterval(() =>{
    //   console.log("hello")
    // },1000)
  }

  addToCart(){
    this.IsInCart = true;
    this.cartService.add(this.book);
    // this.bookEmitter.emit(this.book);
  }

  removeFromCart(){
    this.IsInCart = false;
    this.cartService.remove(this.book);
  }


}
