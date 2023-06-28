import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks(){
    return [
      {
        name: 'The Power of Your Subconscious Mind',
        author: 'Dr. Joseph Murphy',
        image:
          'https://m.media-amazon.com/images/I/51sXL9AWPXS._SX460_BO1,204,203,200_.jpg',
        amt: 500,
      },
      {
        name: 'Think Straight',
        author: 'Darius Foroux',
        image:
          'https://m.media-amazon.com/images/I/41JoC4r8JDL._SX322_BO1,204,203,200_.jpg',
        amt: 200,
      },
      {
        name: "Don't Believe Everything You Think",
        author: 'Joseph Nguyen',
        image:
          'https://m.media-amazon.com/images/I/41SUSwxQ14L._SX324_BO1,204,203,200_.jpg',
        amt: 300,
      },
      {
        name: 'Energize Your Mind',
        author: 'Gaur Gopal Das',
        image:
          'https://m.media-amazon.com/images/I/41RwQlo446L._SX329_BO1,204,203,200_.jpg',
        amt: 600,
      },
    ];
  }
}
