import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private booksArray: any[] = [];
  booksUpdated = new EventEmitter<any[]>();

  constructor() {
    this.loadBooksFromStorage(); 
  }

  addBook(book: {image: string, title: string, author: string, year: string, indication: string, description: string}) {
    this.booksArray.push(book)
    this.saveBooksToStorage(); 
    this.booksUpdated.emit(this.booksArray);
  }

  getBooks() {
    return this.booksArray;
  }

  private saveBooksToStorage() {
    localStorage.setItem('booksArray', JSON.stringify(this.booksArray));  
  }

  private loadBooksFromStorage() {
    const books = localStorage.getItem('booksArray');
    if (books) {
      this.booksArray = JSON.parse(books);  
    }
  }
}