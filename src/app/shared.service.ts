import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private booksArray: any[] = [];
  booksUpdated = new EventEmitter<any[]>();

  constructor() { }

  addBook(book: {image: string, title: string, author: string, year: string, indication: string, description: string}) {
    this.booksArray.push(book);
    this.booksUpdated.emit(this.booksArray);
  }

  getBooks() {
    return this.booksArray;
  }
}
