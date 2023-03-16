import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
  

  getBooks(){
    return  [
      {
        name: ' A Girl to Remember ',
        autor: 'Ajay K Pandey ',
        image: 'https://m.media-amazon.com/images/I/51Q5NANjFtL._SX322_BO1,204,203,200_.jpg',
        amount: 700,
  
      },
      {
        name: ' Atomic Habits: The life-changing million ',
        autor: 'James Clear ',
        image: 'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
        amount: 800,
      },
      {
        name: ' The Power of Your Subconscious Mind ',
        autor: 'Joseph Murphy ',
        image: 'https://m.media-amazon.com/images/I/51QnuLIY2uL._SX322_BO1,204,203,200_.jpg',
        amount: 400,
      },
      {
        name: ' Success Secrets of Amazon ',
        autor: 'Steve Anderson ',
        image: 'https://m.media-amazon.com/images/I/41DaW2Jw6wL._SX323_BO1,204,203,200_.jpg',
        amount: 500,
      }
    ];
  }
}
