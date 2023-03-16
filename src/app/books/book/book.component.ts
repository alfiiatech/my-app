import { Component , OnInit, Input, Output,EventEmitter, OnDestroy } from '@angular/core';
import { Book } from 'src/app/types/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit, OnDestroy {

  @Input() book: Book = {} as Book;
  @Output() bookEmitter = new EventEmitter<Book>();

  myInterval:any = null;

  constructor() { }

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
    this.bookEmitter.emit(this.book);
  }

}
